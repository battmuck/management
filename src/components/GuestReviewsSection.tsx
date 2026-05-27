import { useEffect } from 'react';

const GuestReviewsSection = () => {
  useEffect(() => {
    // Elfsight's platform.js initializes once on page load and won't pick up
    // widget divs that are added/re-added to the DOM by React navigation.
    // Re-inserting the script forces it to re-scan and initialize the widget.
    const existing = document.getElementById('elfsight-platform');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'elfsight-platform';
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);
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
