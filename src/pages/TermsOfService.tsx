import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Términos de Servicio — Lovable to WordPress"
        description="Términos y condiciones de uso del servicio Lovable to WordPress."
      />
      <div className="pt-20">
        <Header />

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              Términos de Servicio
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al acceder y utilizar Lovable2WP ("el Servicio"), operado por Lovable2WP SAS, ubicado en Cra 19 #10-47, Valledupar, Cesar, Colombia, usted acepta estar legalmente vinculado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro Servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Lovable2WP es un plugin que permite convertir proyectos desarrollados en Lovable a sitios web WordPress funcionales. El Servicio incluye:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Conversión automática de proyectos Lovable (.ZIP) a temas WordPress</li>
                  <li>Preservación de estilos y funcionalidades</li>
                  <li>Acceso a actualizaciones del plugin durante el período beta</li>
                  <li>Soporte técnico prioritario para usuarios beta</li>
                  <li>Acceso a la comunidad Discord</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Programa Beta y Licencia</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Durante el período beta, ofrecemos acceso gratuito limitado a 10 usuarios. Los usuarios beta reciben:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Acceso gratuito de por vida al plugin</li>
                  <li>Uso ilimitado en hasta 5 dominios</li>
                  <li>Todas las actualizaciones futuras sin costo adicional</li>
                  <li>Conversiones ilimitadas de proyectos</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  La licencia es personal e intransferible. No está permitida la reventa o redistribución del plugin.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Requisitos del Sistema</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Para utilizar el Servicio, usted necesita:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>WordPress 5.8 o superior</li>
                  <li>Hosting compatible con WordPress</li>
                  <li>Acceso a proyectos exportados de Lovable en formato .ZIP</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Uso Aceptable</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Al utilizar nuestro Servicio, usted se compromete a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Utilizar el plugin únicamente para fines legales y legítimos</li>
                  <li>No intentar descompilar, realizar ingeniería inversa o modificar el código del plugin</li>
                  <li>No utilizar el Servicio para crear sitios web con contenido ilegal, ofensivo o que viole derechos de terceros</li>
                  <li>Mantener la seguridad de su instalación de WordPress actualizada</li>
                  <li>No exceder el límite de 5 dominios por licencia beta</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Propiedad Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  El plugin Lovable2WP, su código fuente, diseño, documentación y todos los materiales relacionados son propiedad exclusiva de Lovable2WP SAS y están protegidos por las leyes de propiedad intelectual de Colombia y tratados internacionales. Los proyectos convertidos y el contenido generado por los usuarios permanecen bajo la propiedad del usuario.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Garantías y Limitaciones</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  El Servicio se proporciona "tal cual" durante el período beta. Si bien nos esforzamos por garantizar la calidad:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>No garantizamos que el Servicio esté libre de errores o interrupciones</li>
                  <li>No nos hacemos responsables por pérdidas de datos o daños a su sitio WordPress</li>
                  <li>Recomendamos realizar copias de seguridad antes de utilizar el plugin</li>
                  <li>El soporte técnico se proporciona sin garantías de tiempo de respuesta específico</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En ningún caso Lovable2WP SAS será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pero no limitado a pérdida de beneficios, datos, uso, o cualquier otra pérdida intangible resultante del uso o la imposibilidad de usar el Servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Modificaciones del Servicio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar, suspender o discontinuar el Servicio en cualquier momento, con o sin previo aviso. No seremos responsables ante usted ni ante terceros por cualquier modificación, suspensión o interrupción del Servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Terminación</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos terminar o suspender su acceso al Servicio inmediatamente, sin previo aviso, por cualquier motivo, incluyendo sin limitación si usted incumple estos Términos. Al terminar, su derecho a usar el Servicio cesará inmediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Ley Aplicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa relacionada con estos Términos será resuelta en los tribunales competentes de Valledupar, Cesar, Colombia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Cambios en los Términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar estos Términos en cualquier momento. Le notificaremos sobre cambios significativos publicando los nuevos Términos en esta página y actualizando la fecha de "Última actualización". Su uso continuado del Servicio después de dichos cambios constituye su aceptación de los nuevos Términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos en:
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

export default TermsOfService;
