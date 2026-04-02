import { useEffect } from "react";
import { CompetitorConfig } from "@/config/competitors";
import q409Image from "@/assets/MAD_7285.JPG";

const DEFAULT_FORM_ID   = "RhDA78jWo8HwM8qSO3kN";
const DEFAULT_FORM_NAME = "Property Management - General";

interface ContactFormSectionProps {
  competitor?: CompetitorConfig;
}

const ContactFormSection = ({ competitor }: ContactFormSectionProps) => {
  const formId   = competitor?.formId   || DEFAULT_FORM_ID;
  const formName = competitor?.formName || DEFAULT_FORM_NAME;

  useEffect(() => {
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact-form" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* Left — image */}
            <div
              className="hidden lg:block bg-cover bg-center min-h-[500px]"
              style={{ backgroundImage: `url(${q409Image})` }}
            />

            {/* Right — form */}
            <div className="px-8 md:px-12 pt-8 pb-4 md:pt-10 md:pb-4">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2 leading-tight">
                Ready to Maximize Your Rental Income?
              </h2>
              <p className="text-base text-muted-foreground font-sans leading-relaxed">
                Get a free, no-obligation property evaluation. We'll show you exactly how much more your Maui property could be earning.
              </p>

              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", marginTop: "-40px", marginBottom: "-24px" }}
                id={`bottom-inline-${formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formName}
                data-height="593"
                data-layout-iframe-id={`bottom-inline-${formId}`}
                data-form-id={formId}
                title={formName}
                scrolling="no"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;