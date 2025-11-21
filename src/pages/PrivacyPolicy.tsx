import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Política de Privacidad — Lovable to WordPress"
        description="Política de privacidad y protección de datos de Lovable to WordPress."
      />
      <div className="pt-20">
        <Header />

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              Política de Privacidad
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lovable2WP SAS ("nosotros", "nuestro" o "la empresa"), ubicada en Cra 19 #10-47, Valledupar, Cesar, Colombia, respeta su privacidad y se compromete a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Información que Recopilamos</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Información que usted nos proporciona</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Datos de registro:</strong> Nombre, dirección de correo electrónico</li>
                  <li><strong>Información de pago:</strong> Detalles de facturación (procesados por terceros seguros)</li>
                  <li><strong>Comunicaciones:</strong> Mensajes que nos envía a través de formularios de contacto o email</li>
                  <li><strong>Información del proyecto:</strong> Archivos .ZIP de Lovable que sube para conversión</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Información recopilada automáticamente</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo en el sitio, clics</li>
                  <li><strong>Información del dispositivo:</strong> Tipo de navegador, sistema operativo, dirección IP</li>
                  <li><strong>Cookies y tecnologías similares:</strong> Para mejorar su experiencia (ver Política de Cookies)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Cómo Utilizamos su Información</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Proporcionar y mantener nuestro servicio</li>
                  <li>Procesar sus conversiones de Lovable a WordPress</li>
                  <li>Enviarle actualizaciones, noticias y soporte técnico</li>
                  <li>Mejorar nuestro sitio web y servicios</li>
                  <li>Detectar, prevenir y abordar problemas técnicos o de seguridad</li>
                  <li>Cumplir con obligaciones legales</li>
                  <li>Comunicarnos con usted sobre su cuenta y servicios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Compartir su Información</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  No vendemos sus datos personales. Podemos compartir su información con:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio (hosting, procesamiento de pagos, analytics)</li>
                  <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
                  <li><strong>Transferencia de negocio:</strong> En caso de fusión, adquisición o venta de activos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Proveedores de Servicios Terceros</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Utilizamos los siguientes servicios de terceros:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
                  <li><strong>Servicios de hosting:</strong> Para alojar nuestro sitio web y servicios</li>
                  <li><strong>Procesadores de pago:</strong> Para procesar transacciones de forma segura</li>
                  <li><strong>Servicios de email:</strong> Para comunicaciones y soporte</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Seguridad de los Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por proteger su información personal, no podemos garantizar su seguridad absoluta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Retención de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los fines descritos en esta Política de Privacidad, a menos que la ley requiera o permita un período de retención más largo. Los archivos .ZIP que sube para conversión se eliminan automáticamente después de completar la conversión.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Sus Derechos</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Acceder:</strong> Solicitar una copia de sus datos personales</li>
                  <li><strong>Rectificar:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong>Eliminar:</strong> Solicitar la eliminación de sus datos personales</li>
                  <li><strong>Limitar:</strong> Solicitar la limitación del procesamiento de sus datos</li>
                  <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                  <li><strong>Oponerse:</strong> Oponerse al procesamiento de sus datos personales</li>
                  <li><strong>Retirar consentimiento:</strong> En cualquier momento, sin afectar la legalidad del procesamiento anterior</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Para ejercer estos derechos, contáctenos en camilogv0102@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Transferencias Internacionales</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de Colombia. Cuando esto ocurra, nos aseguramos de que existan salvaguardas adecuadas para proteger su información de acuerdo con esta Política de Privacidad y las leyes aplicables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Privacidad de Menores</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro servicio no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de menores de 18 años. Si descubrimos que hemos recopilado datos de un menor, tomaremos medidas para eliminar esa información.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Cambios a esta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Le recomendamos revisar esta política regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos personales, puede contactarnos en:
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

export default PrivacyPolicy;
