import { useEffect } from "react";
import heroImage from "@/assets/hero-maui.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <p className="text-primary-foreground/90 font-sans text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
              Hawaii Vacation Homes vs MyPerfectStays
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Choosing the Right{" "}
              <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Maui Property Manager?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 font-sans font-light max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              If you're researching <strong className="font-semibold">MyPerfectStays</strong> or comparing Maui property management options, you're in the right place.
            </p>

            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-sans font-medium text-base px-8 py-6 bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:text-primary-foreground animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              See Why Owners Switch
            </Button>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-2xl animate-fade-in min-h-[500px] md:min-h-[550px]" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-1 mb-1 text-center">
              Get a Free Revenue Estimate
            </h2>
            <p className="text-muted-foreground font-sans text-sm md:text-base mb-0 text-center">
              See how much more your property could earn
            </p>
            
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/NIkdCb3EJxwZ7DtCplGq"
              style={{ width: "100%", height: "100%", minHeight: "450px", border: "none", borderRadius: "3px" }}
              id="inline-NIkdCb3EJxwZ7DtCplGq"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Property Management - Competitor Form"
              data-height="593"
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

export default HeroSection;
