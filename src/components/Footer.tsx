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
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://www.facebook.com/HawaiiVacationHomes" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-md bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/hawaiivacationhomes" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-md bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
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