import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "After two years with MyPerfectStays, I switched to Hawaii Vacation Homes and saw my revenue increase by 22% in the first quarter. The difference in personal attention is night and day.",
    author: "Sarah M.",
    property: "Kaanapali Beachfront Villa",
    rating: 5,
  },
  {
    quote: "I was tired of dealing with call centers and ticket systems. Now I have a direct line to my property manager who actually knows my home. It's the peace of mind I was looking for.",
    author: "Michael & Jennifer T.",
    property: "Wailea Luxury Condo",
    rating: 5,
  },
  {
    quote: "The transition was seamless. They handled everything—my calendar, guest communications, even updated all my photos for free. I wish I had switched sooner.",
    author: "David K.",
    property: "Lahaina Oceanview Home",
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

        <div className="grid md:grid-cols-3 gap-8">
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
