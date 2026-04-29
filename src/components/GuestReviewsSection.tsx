import { useEffect } from "react";

const GuestReviewsSection = () => {
  useEffect(() => {
    // Load the Elfsight platform script
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is optional since other pages might use Elfsight
    };
  }, []);

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            What Guests Are Saying
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Real reviews from guests who've stayed at our properties.
          </p>
        </div>

        {/* Elfsight All-in-One Reviews Widget */}
        <div 
          className="elfsight-app-25f1a7c3-19e2-415c-8096-ddcaa436db9e" 
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
};

export default GuestReviewsSection;
