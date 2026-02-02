import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Matt has been an absolute game-changer in managing my short-term rentals over the past five years. His attention to detail, responsiveness, and commitment to guest satisfaction have kept my properties running smoothly and consistently profitable. He handles everything from bookings to maintenance with ease, giving me total peace of mind. I couldn't ask for a more reliable and knowledgeable property manager. Highly recommend Matt to anyone looking for top-tier STR management!",
    author: "Brandon Turner",
    property: "Owner, Best-Selling Real Estate Author with Over 1M+ Copies Sold, and the Past Host of BiggerPockets Podcast",
    rating: 5,
  },
  {
    quote: "Matt is naturally gifted at hospitality, guest services and customer support in particular, in such a way that I could never be. He is an incredible human being to boot!",
    author: "Terry Chen",
    property: "Owner",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            What Owners Are Saying
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Real stories from property owners who made the switch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground font-sans text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-sans font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="font-sans text-xs text-muted-foreground">
                  {testimonial.property}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
