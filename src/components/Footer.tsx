import logoHorizontal from "@/assets/logo-horizontal-light.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-16">
      <div className="container-narrow mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Logo & License */}
          <div className="flex flex-col">
            <img 
              src={logoHorizontal} 
              alt="Hawaii Vacation Homes" 
              className="h-24 md:h-32 mb-6 object-contain self-start"
            />
            <div className="mt-auto">
              <p className="text-foreground font-sans font-medium">
                Hawaii Equity Management LLC
              </p>
              <p className="text-foreground font-sans">
                License #RB-23767
              </p>
            </div>
          </div>
          
          {/* Right Column - Contact */}
          <div>
            <h3 className="text-sm font-sans font-medium tracking-widest text-muted-foreground mb-6">
              CONTACT
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans text-foreground text-lg">808-793-5372</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans text-foreground text-lg">aloha@hawaiivacationhomes.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans text-foreground text-lg">122 Kio Loop B-2 Kihei, HI 96753</span>
              </div>
            </div>
            
            {/* Properties Link */}
            <a 
              href="https://hawaiivacationhomes.com/search-results/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-primary hover:text-primary/80 transition-colors"
            >
              See Our Properties
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-sans">
            © {new Date().getFullYear()} Hawaii Vacation Homes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-sans transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-sans transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;