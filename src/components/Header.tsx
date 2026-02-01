import logoHorizontal from "@/assets/logo-horizontal.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow mx-auto px-4 py-4 flex items-center justify-between">
        <img 
          src={logoHorizontal} 
          alt="Hawaii Vacation Homes" 
          className="h-10 md:h-12"
        />
        <Button variant="default" size="sm" className="font-sans font-medium">
          Get Free Evaluation
        </Button>
      </div>
    </header>
  );
};

export default Header;
