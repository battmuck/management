import { useEffect } from "react";

const ContactFormSection = () => {
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
        <p className="text-lg text-muted-foreground font-sans mb-8">
          Get a free, no-obligation property evaluation. We'll show you exactly how much more your Maui property could be earning.
        </p>
        
        <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/NIkdCb3EJxwZ7DtCplGq"
            style={{ width: "100%", height: "593px", border: "none", borderRadius: "3px" }}
            id="bottom-inline-NIkdCb3EJxwZ7DtCplGq"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Property Management - Competitor Form"
            data-height="593"
            data-layout-iframe-id="bottom-inline-NIkdCb3EJxwZ7DtCplGq"
            data-form-id="NIkdCb3EJxwZ7DtCplGq"
            title="Property Management - Competitor Form"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;