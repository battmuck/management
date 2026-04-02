import { useEffect } from "react";
import { CompetitorConfig } from "@/config/competitors";

const DEFAULT_FORM_ID   = "NIkdCb3EJxwZ7DtCplGq";
const DEFAULT_FORM_NAME = "Property Management - MyPerfectStays";

interface ContactFormSectionProps {
  competitor?: CompetitorConfig;
}

const ContactFormSection = ({ competitor }: ContactFormSectionProps) => {
  const formId   = competitor?.formId   || DEFAULT_FORM_ID;
  const formName = competitor?.formName || DEFAULT_FORM_NAME;

  useEffect(() => {
    // Load the form embed script (may already be loaded from hero)
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact-form" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
          Ready to Maximize Your Rental Income?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
          Get a free, no-obligation property evaluation. We'll show you exactly how much more your Maui property could be earning.
        </p>
        
        <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
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
    </section>
  );
};

export default ContactFormSection;