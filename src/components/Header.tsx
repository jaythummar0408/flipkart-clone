import { Search, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="lg:hidden">
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="flex items-center gap-1.5 flex-shrink-0">
            <div className="font-bold text-lg italic">
              Flipkart <span className="text-[10px] font-normal align-top">Lite</span>
            </div>
            <div className="text-[9px] bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded hidden sm:block">
              Explore <span className="font-bold">Plus</span>+
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="w-full px-4 py-2 rounded text-foreground bg-card"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            </div>
          </div>

          <Link to="/cart" className="flex-shrink-0 ml-auto">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full px-4 py-2 rounded text-sm text-foreground bg-white placeholder:text-muted-foreground"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
