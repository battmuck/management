import logoStacked from "@/assets/logo-stacked.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container-narrow mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoStacked} 
              alt="Hawaii Vacation Homes" 
              className="h-24 mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-primary-foreground/70 text-sm font-sans text-center md:text-left max-w-xs">
              Maui's boutique vacation rental management company. Locally owned & operated.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans transition-colors">
                Contact
              </a>
            </div>
            <p className="text-primary-foreground/50 text-xs font-sans">
              © {new Date().getFullYear()} Hawaii Vacation Homes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
