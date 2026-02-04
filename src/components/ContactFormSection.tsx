import { useEffect } from "react";

const ContactFormSection = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact-form" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Ready to Maximize Your Rental Income?
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-6">
              Get a free, no-obligation property evaluation. We'll show you exactly how much more your Maui property could be earning.
            </p>
            <p className="text-muted-foreground font-sans text-sm">
              Fill out the form and our team will reach out within 24 hours to discuss your property's potential.
            </p>
          </div>

          {/* Right Column - Embedded Form */}
          <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-0">
              Get a Free Revenue Estimate
            </h3>
            
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/NIkdCb3EJxwZ7DtCplGq"
              style={{ width: "100%", minHeight: "700px", border: "none", borderRadius: "3px" }}
              id="inline-NIkdCb3EJxwZ7DtCplGq"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Property Management - Competitor Form"
              data-height="700"
              data-layout-iframe-id="inline-NIkdCb3EJxwZ7DtCplGq"
              data-form-id="NIkdCb3EJxwZ7DtCplGq"
              title="Property Management - Competitor Form"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;