import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-[--color-neutral-200]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img 
            src="https://cv.craftzing.com/uploads/logos/_AUTOx94_fit_center-center_none/craftzing-group.png" 
            alt="Craftzing" 
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-[--color-primary-600] hover:text-[--color-primary-600]/80">
            Help
          </Button>
          <Button className="bg-[--color-primary-600] hover:bg-[--color-primary-600]/90 text-white">
            Contact us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;