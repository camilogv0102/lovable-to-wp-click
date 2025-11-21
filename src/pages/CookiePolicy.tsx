import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CookiePolicy = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Política de Cookies — Lovable to WordPress"
        description="Información sobre el uso de cookies en Lovable to WordPress."
      />
      <div className="pt-20">
        <Header />

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              Política de Cookies
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita nuestro sitio web. Las cookies ayudan a que el sitio web funcione correctamente, lo hacen más seguro, proporcionan una mejor experiencia de usuario y nos ayudan a comprender cómo funciona el sitio y analizar qué funciona y dónde necesita mejoras.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. ¿Cómo Utilizamos las Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies propias y de terceros para diversos fines. Las cookies de origen son principalmente necesarias para que el sitio web funcione correctamente y no recopilan ninguno de sus datos personalmente identificables.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Las cookies de terceros utilizadas en nuestro sitio web sirven principalmente para comprender cómo funciona el sitio web, cómo interactúa con nuestro sitio web, mantener nuestros servicios seguros y mejorar su experiencia de usuario general.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Tipos de Cookies que Utilizamos</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Cookies Esenciales (Necesarias)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Estas cookies son estrictamente necesarias para que el sitio web funcione correctamente. No se pueden desactivar en nuestros sistemas.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Cookies de sesión:</strong> Mantienen su sesión activa mientras navega por el sitio</li>
                  <li><strong>Cookies de seguridad:</strong> Ayudan a autenticar usuarios y prevenir el uso fraudulento</li>
                  <li><strong>Cookies de preferencias:</strong> Recuerdan sus preferencias de idioma y región</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Cookies de Análisis y Rendimiento</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Recopila información sobre cómo se utiliza el sitio web (páginas visitadas, tiempo en el sitio, tasa de rebote)</li>
                  <li><strong>Análisis de rendimiento:</strong> Ayudan a identificar problemas técnicos y mejorar la velocidad del sitio</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Cookies Funcionales</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Estas cookies permiten que el sitio web proporcione funcionalidad y personalización mejoradas.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Preferencias de usuario:</strong> Recuerdan sus elecciones (como preferencias de visualización)</li>
                  <li><strong>Chat en vivo:</strong> Si está disponible, permite comunicación en tiempo real con soporte</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.4 Cookies de Publicidad y Marketing</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Estas cookies se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Cookies de remarketing:</strong> Rastrean su visita para mostrarle anuncios relevantes</li>
                  <li><strong>Conversión tracking:</strong> Miden la efectividad de nuestras campañas publicitarias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cookies de Terceros</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Además de nuestras propias cookies, también utilizamos cookies de terceros para los siguientes propósitos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Para análisis web y seguimiento del comportamiento del usuario</li>
                  <li><strong>Servicios de hosting:</strong> Para garantizar la funcionalidad y seguridad del sitio</li>
                  <li><strong>Redes sociales:</strong> Si compartimos contenido en redes sociales, pueden establecer cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. ¿Cuánto Tiempo Permanecen las Cookies en su Dispositivo?</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  El tiempo que una cookie permanece en su dispositivo depende de su tipo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Cookies de sesión:</strong> Son temporales y se eliminan automáticamente cuando cierra su navegador</li>
                  <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo durante un período específico (puede variar desde días hasta años) o hasta que las elimine manualmente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Cómo Gestionar las Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Puede controlar y/o eliminar cookies según desee. Tiene las siguientes opciones:
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">6.1 A través de su Navegador</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  La mayoría de los navegadores web le permiten controlar las cookies a través de su configuración:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Rechazar Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puede configurar su navegador para que rechace todas las cookies o solo las de terceros. Sin embargo, tenga en cuenta que bloquear todas las cookies puede afectar negativamente a su experiencia en nuestro sitio web, ya que algunas funciones pueden no estar disponibles.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Eliminar Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puede eliminar todas las cookies que ya están en su dispositivo a través de la configuración de su navegador. Tenga en cuenta que esto eliminará todas las cookies, no solo las de nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies Específicas que Utilizamos</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border/40 mt-4">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="border border-border/40 p-3 text-left">Nombre</th>
                        <th className="border border-border/40 p-3 text-left">Tipo</th>
                        <th className="border border-border/40 p-3 text-left">Duración</th>
                        <th className="border border-border/40 p-3 text-left">Propósito</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-muted-foreground">
                      <tr>
                        <td className="border border-border/40 p-3">_ga</td>
                        <td className="border border-border/40 p-3">Análisis</td>
                        <td className="border border-border/40 p-3">2 años</td>
                        <td className="border border-border/40 p-3">Google Analytics - distingue usuarios</td>
                      </tr>
                      <tr>
                        <td className="border border-border/40 p-3">_gid</td>
                        <td className="border border-border/40 p-3">Análisis</td>
                        <td className="border border-border/40 p-3">24 horas</td>
                        <td className="border border-border/40 p-3">Google Analytics - distingue usuarios</td>
                      </tr>
                      <tr>
                        <td className="border border-border/40 p-3">_gat</td>
                        <td className="border border-border/40 p-3">Análisis</td>
                        <td className="border border-border/40 p-3">1 minuto</td>
                        <td className="border border-border/40 p-3">Google Analytics - limita tasa de solicitudes</td>
                      </tr>
                      <tr>
                        <td className="border border-border/40 p-3">PHPSESSID</td>
                        <td className="border border-border/40 p-3">Esencial</td>
                        <td className="border border-border/40 p-3">Sesión</td>
                        <td className="border border-border/40 p-3">Mantiene la sesión del usuario</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Actualizaciones de esta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Le recomendamos revisar esta página regularmente para mantenerse informado sobre nuestro uso de cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Más Información</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Para obtener más información sobre cómo usamos, almacenamos y protegemos sus datos personales, consulte nuestra <a href="/privacy-policy" className="text-primary hover:underline">Política de Privacidad</a>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Si tiene preguntas sobre esta Política de Cookies, puede contactarnos en:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold">Lovable2WP SAS</p>
                  <p className="text-muted-foreground">Cra 19 #10-47</p>
                  <p className="text-muted-foreground">Valledupar, Cesar, Colombia</p>
                  <p className="text-muted-foreground">Email: camilogv0102@gmail.com</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default CookiePolicy;
