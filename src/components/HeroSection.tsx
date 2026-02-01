import heroImage from "@/assets/hero-maui.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 py-16 text-center">
        <p className="text-primary-foreground/90 font-sans text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Hawaii Vacation Homes vs MyPerfectStays
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Choosing the Right<br />
          <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Maui Property Manager?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/85 font-sans font-light max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          If you're researching MyPerfectStays or comparing Maui property management options, you're in the right place. See how Hawaii Vacation Homes compares when it comes to revenue performance, owner communication, and hands-on local care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="font-sans font-medium text-base px-8 py-6"
          >
            Get Your Free Property Evaluation
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-sans font-medium text-base px-8 py-6 bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:text-primary-foreground"
          >
            See The Comparison
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
