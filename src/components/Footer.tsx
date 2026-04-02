import { Link } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal-light.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-16">
      <div className="container-narrow mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Logo & License */}
          <div className="md:col-span-1 flex flex-col">
            <img
              src={logoHorizontal}
              alt="Hawaii Vacation Homes"
              className="h-24 md:h-28 mb-6 object-contain self-start"
            />
            <div className="mt-auto">
              <p className="text-foreground font-sans font-medium text-sm">
                Hawaii Equity Management LLC
              </p>
              <p className="text-muted-foreground font-sans text-sm">
                License #RB-23767
              </p>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/management" className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <a href="https://hawaiivacationhomes.com/search-results/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors">
                  Our Properties
                </a>
              </li>
              <li>
                <Link to="/referral" className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors">
                  Agent Referral Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Compare */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              Compare
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/vacasa" className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors">
                  Vacasa vs Hawaii Vacation Homes
                </Link>
              </li>
              <li>
                <Link to="/myperfectstays" className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors">
                  MyPerfectStays vs Hawaii Vacation Homes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a href="tel:8087935372" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-sans text-sm text-foreground/80 group-hover:text-primary transition-colors">808-793-5372</span>
              </a>
              <a href="mailto:aloha@hawaiivacationhomes.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-sans text-sm text-foreground/80 group-hover:text-primary transition-colors">aloha@hawaiivacationhomes.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-sans text-sm text-foreground/80">122 Kio Loop B-2<br />Kihei, HI 96753</span>
              </div>
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