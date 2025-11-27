import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="px-4 py-3">
        {/* Top Row - Logo, Login, Download */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="Flipkart" className="h-8 w-auto" />
          </Link>

          {/* Right Side Icons */}
          <div className="flex items-center gap-6">
            {/* Download App */}
            <button className="flex items-center gap-1.5">
              <img src="/download.svg" alt="Download" className="h-4 w-4" />
            </button>

            {/* Login */}
            <button className="flex items-center gap-1.5">
              <img src="/login.svg" alt="Login" className="h-4 w-4" />
              <span className="text-sm font-medium">Login</span>
            </button>

            {/* Cart */}
            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
