import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/**
 * PostCheckoutAccount Component
 * 
 * Esta página se muestra después del checkout de WooCommerce y permite al usuario
 * crear su cuenta para acceder al dashboard y descargar el plugin.
 * 
 * Espera recibir `pageData` desde WordPress vía window.__LTW_PAGE_DATA__ con la siguiente estructura:
 * 
 * @typedef {Object} PostCheckoutPageData
 * @property {number} orderId - ID de la orden de WooCommerce
 * @property {string} orderKey - Clave de la orden para validación
 * @property {string} userEmail - Email del usuario que completó la compra
 * @property {string} ajaxUrl - URL del endpoint AJAX de WordPress (normalmente /wp-admin/admin-ajax.php)
 * @property {string} appRedirect - URL del dashboard a donde redirigir tras registro exitoso
 * @property {string} [downloadFallbackUrl] - URL de descarga alternativa (opcional)
 * @property {string} [nonce] - Nonce de seguridad de WordPress (opcional, para futuro)
 * @property {Object} [copy] - Textos personalizables
 * @property {string} [copy.title] - Título principal
 * @property {string} [copy.subtitle] - Subtítulo
 * @property {string} [copy.button] - Texto del botón
 * @property {string} [copy.successHeadline] - Título de éxito
 * @property {string} [copy.supportEmail] - Email de soporte
 */

type PostCheckoutPageData = {
  orderId: number;
  orderKey: string;
  userEmail: string;
  ajaxUrl: string;
  appRedirect: string;
  downloadFallbackUrl?: string;
  nonce?: string;
  copy?: {
    title?: string;
    subtitle?: string;
    button?: string;
    successHeadline?: string;
    supportEmail?: string;
  };
};

type Props = {
  pageData?: unknown;
};

const PostCheckoutAccount = ({ pageData: rawPageData }: Props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [downloadToken, setDownloadToken] = useState<string | null>(null);

  // Datos de prueba para previsualización en desarrollo
  const mockPageData: PostCheckoutPageData = {
    orderId: 12345,
    orderKey: "wc_order_mock_key",
    userEmail: "usuario@ejemplo.com",
    ajaxUrl: "https://midominio.com/wp-admin/admin-ajax.php",
    appRedirect: "https://lovabletowordpress.online/LtwAPI/app/index.php?p=dashboard",
    copy: {
      title: "Thanks for your purchase!",
      subtitle: "Finish setting up your account to download the plugin",
      button: "Download plugin",
      successHeadline: "Registration successful!",
      supportEmail: "camilo@lovabletowordpress.online",
    },
  };

  // Type guard y validación de datos - usar mock data si no hay pageData real
  const pageData = (rawPageData as PostCheckoutPageData | undefined) || mockPageData;
  const hasRequiredData = pageData?.orderId && pageData?.ajaxUrl && pageData?.userEmail;

  // Validaciones de password
  const passwordError = password && password.length < 8 ? "Password must be at least 8 characters" : null;
  const confirmError = confirmPassword && password !== confirmPassword ? "Passwords don't match" : null;
  const canSubmit = password.length >= 8 && password === confirmPassword && !isLoading;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !pageData) return;

    setIsLoading(true);
    setError(null);

    // Timeout controller para evitar peticiones que cuelgan
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos

    try {
      console.log("[PostCheckout] Iniciando registro de usuario", {
        orderId: pageData.orderId,
        email: pageData.userEmail,
        ajaxUrl: pageData.ajaxUrl,
      });

      // Construir FormData para envío AJAX compatible con WordPress
      const formData = new FormData();
      formData.append("action", "custom_thankyou_register");
      formData.append("user_email", pageData.userEmail);
      formData.append("user_pass", password);
      formData.append("order_id", pageData.orderId.toString());
      
      // Si hay order_key, incluirlo para validación adicional
      if (pageData.orderKey) {
        formData.append("order_key", pageData.orderKey);
      }
      
      // Si hay nonce en pageData, incluirlo para seguridad
      if (pageData.nonce) {
        formData.append("nonce", pageData.nonce);
      }

      console.log("[PostCheckout] Enviando petición AJAX a WordPress");

      // Enviar petición AJAX con credentials para mantener sesión de WooCommerce
      // IMPORTANTE: No setear Content-Type manualmente, FormData lo hace automático
      const response = await fetch(pageData.ajaxUrl, {
        method: "POST",
        body: formData,
        credentials: "include", // Crucial para mantener cookies de sesión de WooCommerce
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("[PostCheckout] Respuesta recibida", {
        status: response.status,
        ok: response.ok,
      });

      // Validar que la respuesta sea exitosa antes de parsear
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
      }

      // Parsear respuesta JSON
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("[PostCheckout] Error parseando JSON", parseError);
        throw new Error("Invalid response format from server");
      }

      console.log("[PostCheckout] Respuesta parseada", {
        success: result.success,
        hasData: !!result.data,
      });

      /**
       * Formato esperado de respuesta de WordPress:
       * 
       * Éxito:
       * {
       *   success: true,
       *   data: {
       *     download_url: string (opcional, URL del plugin),
       *     token: string (opcional, token para mostrar confirmación),
       *     app_redirect: string (URL del dashboard, fallback a pageData.appRedirect)
       *   }
       * }
       * 
       * Error:
       * {
       *   success: false,
       *   data: {
       *     message: string (mensaje de error para mostrar al usuario)
       *   }
       * }
       */

      if (result.success) {
        console.log("[PostCheckout] Registro exitoso");
        setSuccess(true);
        
        // Extraer datos de la respuesta
        const downloadUrl = result.data?.download_url || "";
        const token = result.data?.token || "";
        const redirectUrl = result.data?.app_redirect || pageData.appRedirect;

        if (token) {
          console.log("[PostCheckout] Token recibido");
          setDownloadToken(token);
        }

        // Si hay URL de descarga, disparar descarga automática
        if (downloadUrl) {
          console.log("[PostCheckout] Iniciando descarga automática", downloadUrl);
          try {
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = "";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (downloadError) {
            console.error("[PostCheckout] Error en descarga automática", downloadError);
            // No bloquear el flujo si falla la descarga
          }
        } else {
          console.log("[PostCheckout] No hay URL de descarga disponible");
        }

        // Redirigir a Discord después de 2 segundos
        console.log("[PostCheckout] Programando redirección a Discord");
        setTimeout(() => {
          window.location.href = "https://discord.com/invite/sXMaHca4j";
        }, 2000);
      } else {
        // Error desde WordPress
        const errorMessage = result.data?.message || result.message || "Registration failed. Please try again.";
        console.error("[PostCheckout] Error en registro", errorMessage);
        setError(errorMessage);
        setIsLoading(false);
      }
    } catch (err) {
      clearTimeout(timeoutId);
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          console.error("[PostCheckout] Timeout - petición cancelada");
          setError("Request timed out. Please try again.");
        } else {
          console.error("[PostCheckout] Error en petición", err.message);
          setError(`Error: ${err.message}. Please try again or contact support.`);
        }
      } else {
        console.error("[PostCheckout] Error desconocido", err);
        setError("Network error. Please check your connection and try again.");
      }
      
      setIsLoading(false);
    }
  };

  // Estado de error si faltan datos críticos
  if (!hasRequiredData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Helmet>
          <title>Order Error - Setup Account</title>
        </Helmet>
        <div className="w-full max-w-md">
          <Alert variant="destructive">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription className="mt-2">
              <p className="font-semibold mb-2">Order information not found</p>
              <p className="text-sm mb-4">
                We couldn't find your order information. This page requires valid order data to proceed.
              </p>
              {pageData?.copy?.supportEmail && (
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${pageData.copy.supportEmail}`}>
                    Contact Support
                  </a>
                </Button>
              )}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  // Estado de éxito
  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Helmet>
          <title>Success - Account Created</title>
        </Helmet>
        <div className="w-full max-w-md bg-card rounded-lg shadow-[var(--shadow-card)] p-8 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="h-16 w-16 text-[#75F425]" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-[#151515] dark:text-foreground">
            {pageData.copy?.successHeadline || "Registration successful!"}
          </h1>
          <p className="text-muted-foreground mb-6">
            Redirecting you to Discord where you'll find the dashboard link. In the dashboard, you can generate your API Token to use the plugin.
          </p>
          {downloadToken && (
            <p className="text-sm text-muted-foreground mb-4">
              Token ready, you'll see it inside the dashboard
            </p>
          )}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Redirecting...</span>
          </div>
        </div>
      </div>
    );
  }

  // Formulario principal
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6">
      <Helmet>
        <title>{pageData.copy?.title || "Setup Your Account"} - Lovable to WordPress</title>
      </Helmet>
      
      <div className="w-full max-w-[480px] bg-card rounded-lg shadow-[var(--shadow-card)] p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#151515] dark:text-foreground">
            {pageData.copy?.title || "Thanks for your purchase!"}
          </h1>
          <p className="text-muted-foreground">
            {pageData.copy?.subtitle || "Finish setting up your account to download the plugin"}
          </p>
        </div>

        {/* Pasos */}
        <div className="mb-8 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <p className="text-sm text-foreground">Create your account</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <p className="text-sm text-foreground">Download the plugin</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <p className="text-sm text-foreground">Join Discord to get your dashboard access link</p>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email (readonly) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={pageData.userEmail}
              readOnly
              className="bg-muted/50"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-foreground">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={passwordError ? "border-destructive" : ""}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {passwordError && (
              <p className="text-sm text-destructive mt-1">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-foreground">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className={confirmError ? "border-destructive" : ""}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {confirmError && (
              <p className="text-sm text-destructive mt-1">{confirmError}</p>
            )}
          </div>

          {/* Error alert */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Submit button */}
          <Button
            type="submit"
            disabled={!canSubmit}
            className="w-full h-12 text-base font-semibold"
            style={{
              backgroundColor: canSubmit ? "#75F425" : undefined,
              color: canSubmit ? "#151515" : undefined,
            }}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Creating account…
              </>
            ) : (
              pageData.copy?.button || "Download plugin"
            )}
          </Button>
        </form>

        {/* Support contact */}
        {pageData.copy?.supportEmail && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            Need help?{" "}
            <a
              href={`mailto:${pageData.copy.supportEmail}`}
              className="text-primary hover:underline"
            >
              Contact support
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCheckoutAccount;
