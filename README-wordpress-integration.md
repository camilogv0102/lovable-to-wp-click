# WordPress/WooCommerce Integration Guide

## PostCheckoutAccount Page - Backend Requirements

La página `/setup-account` (componente `PostCheckoutAccount.tsx`) requiere un endpoint AJAX en WordPress para crear la cuenta del usuario y procesar el post-checkout.

### Endpoint AJAX de WordPress

**URL:** Normalmente `https://tu-dominio.com/wp-admin/admin-ajax.php`

**Método:** POST

**Action:** `custom_thankyou_register`

### Parámetros esperados (FormData)

```php
$_POST['action'] = 'custom_thankyou_register'
$_POST['user_email'] = 'email@usuario.com'
$_POST['user_pass'] = 'password-del-usuario'
$_POST['order_id'] = '12345' // ID de la orden de WooCommerce
$_POST['order_key'] = 'wc_order_xxx' // (Opcional) Clave de orden para validación adicional
$_POST['nonce'] = 'wp_nonce_value' // (Opcional) Nonce de WordPress para seguridad
```

### Formato de Respuesta Requerido

WordPress debe responder con JSON usando `wp_send_json_success()` o `wp_send_json_error()`.

#### Respuesta Exitosa

```php
wp_send_json_success([
    'download_url' => 'https://tu-dominio.com/descargas/plugin.zip', // Opcional
    'token' => 'api-token-generado', // Opcional, para mostrar confirmación
    'app_redirect' => 'https://dashboard.lovabletowordpress.online/app?user=xxx' // Opcional, si no se usa el valor por defecto
]);
```

Esto generará:
```json
{
    "success": true,
    "data": {
        "download_url": "https://tu-dominio.com/descargas/plugin.zip",
        "token": "api-token-generado",
        "app_redirect": "https://dashboard.lovabletowordpress.online/app?user=xxx"
    }
}
```

#### Respuesta de Error

```php
wp_send_json_error([
    'message' => 'Email already registered' // Mensaje que se mostrará al usuario
]);
```

Esto generará:
```json
{
    "success": false,
    "data": {
        "message": "Email already registered"
    }
}
```

### Ejemplo de Implementación en WordPress

```php
// En functions.php o en un plugin

add_action('wp_ajax_custom_thankyou_register', 'handle_thankyou_register');
add_action('wp_ajax_nopriv_custom_thankyou_register', 'handle_thankyou_register');

function handle_thankyou_register() {
    // Validar nonce si se envió
    if (isset($_POST['nonce']) && !wp_verify_nonce($_POST['nonce'], 'thankyou_register')) {
        wp_send_json_error(['message' => 'Security check failed']);
        return;
    }

    // Obtener datos
    $email = sanitize_email($_POST['user_email']);
    $password = $_POST['user_pass'];
    $order_id = intval($_POST['order_id']);
    $order_key = isset($_POST['order_key']) ? sanitize_text_field($_POST['order_key']) : '';

    // Validar que la orden existe y pertenece al email
    $order = wc_get_order($order_id);
    
    if (!$order) {
        wp_send_json_error(['message' => 'Order not found']);
        return;
    }

    // Validar que el email coincide con la orden
    if ($order->get_billing_email() !== $email) {
        wp_send_json_error(['message' => 'Email does not match order']);
        return;
    }

    // Validar order_key si se proporcionó
    if ($order_key && $order->get_order_key() !== $order_key) {
        wp_send_json_error(['message' => 'Invalid order key']);
        return;
    }

    // Validar que la orden está pagada
    if (!$order->is_paid()) {
        wp_send_json_error(['message' => 'Order is not paid']);
        return;
    }

    // Verificar si el usuario ya existe
    if (email_exists($email)) {
        wp_send_json_error(['message' => 'Email already registered. Please login instead.']);
        return;
    }

    // Validar contraseña
    if (strlen($password) < 8) {
        wp_send_json_error(['message' => 'Password must be at least 8 characters']);
        return;
    }

    // Crear usuario
    $user_id = wp_create_user($email, $password, $email);

    if (is_wp_error($user_id)) {
        wp_send_json_error(['message' => $user_id->get_error_message()]);
        return;
    }

    // Actualizar metadata del usuario
    update_user_meta($user_id, 'wc_order_id', $order_id);
    update_user_meta($user_id, 'registration_date', current_time('mysql'));

    // Generar token de API (ejemplo)
    $api_token = wp_generate_password(32, false);
    update_user_meta($user_id, 'api_token', $api_token);

    // Obtener URL de descarga del plugin desde la orden
    $download_url = '';
    $downloads = $order->get_downloadable_items();
    if (!empty($downloads)) {
        $download_url = reset($downloads)['download_url'];
    }

    // Loguear al usuario automáticamente
    wp_set_current_user($user_id);
    wp_set_auth_cookie($user_id);

    // Responder con éxito
    wp_send_json_success([
        'download_url' => $download_url,
        'token' => $api_token,
        'app_redirect' => 'https://dashboard.lovabletowordpress.online/app/index.php?p=dashboard&user_id=' . $user_id
    ]);
}
```

### Datos Inyectados por WordPress

WordPress debe inyectar los datos necesarios en `window.__LTW_PAGE_DATA__` cuando renderice la página:

```php
// En el template de WordPress
<script>
window.__LTW_PAGE_DATA__ = <?php echo json_encode([
    'orderId' => $order->get_id(),
    'orderKey' => $order->get_order_key(),
    'userEmail' => $order->get_billing_email(),
    'ajaxUrl' => admin_url('admin-ajax.php'),
    'appRedirect' => 'https://lovabletowordpress.online/LtwAPI/app/index.php?p=dashboard',
    'nonce' => wp_create_nonce('thankyou_register'),
    'copy' => [
        'title' => 'Thanks for your purchase!',
        'subtitle' => 'Finish setting up your account to download the plugin',
        'button' => 'Download plugin',
        'successHeadline' => 'Registration successful!',
        'supportEmail' => 'camilo@lovabletowordpress.online'
    ]
]); ?>;
</script>
```

### Flujo Completo

1. Usuario completa el checkout de WooCommerce
2. WordPress redirige a `/setup-account` con los datos inyectados
3. Usuario ve el formulario precargado con su email
4. Usuario ingresa y confirma su password
5. Frontend envía petición POST al AJAX de WordPress
6. WordPress valida la orden, crea el usuario y responde con éxito
7. Frontend inicia descarga automática del plugin (si hay URL)
8. Frontend redirige a Discord después de 2 segundos

### Consideraciones de Seguridad

1. **Siempre validar** que la orden existe y está pagada
2. **Verificar** que el email coincide con la orden
3. **Usar nonces** de WordPress para prevenir CSRF
4. **Validar** que el usuario no existe ya
5. **Sanitizar** todos los inputs
6. **Usar** `credentials: 'include'` en el fetch para mantener cookies de sesión
7. **Limitar** intentos de registro por IP/sesión

### Timeout

El frontend tiene un timeout de 30 segundos. Asegúrate de que el procesamiento en WordPress sea rápido. Si necesitas hacer operaciones lentas (como enviar emails), hazlas de forma asíncrona.

### Logging

El componente React incluye logging detallado en la consola del navegador con el prefijo `[PostCheckout]`. Úsalo para debugging durante el desarrollo.

### Testing

Para testing en desarrollo sin WordPress, el componente usa datos mock cuando no detecta `pageData`. Los datos mock están en el componente y puedes ajustarlos según necesites.
