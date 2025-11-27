import { ShoppingCart, Menu, Download, User } from "lucide-react";
import { Link } from "react-router-dom";
import FlipkartLogo from "./FlipkartLogo";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="px-4 py-3">
        {/* Top Row - Burger Menu, Logo, Login */}
        <div className="flex items-center justify-between">
          {/* Left Side - Burger Menu + Logo */}
          <div className="flex items-center gap-3">
            {/* Burger Menu */}
            <button className="flex items-center">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <FlipkartLogo className="h-7 w-auto" />
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-6">
            {/* Download App */}
            <button className="flex items-center gap-1.5">
              <Download className="h-5 w-5" />
            </button>

            {/* Login */}
            <button className="flex items-center gap-1.5">
              <User className="h-5 w-5" />
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
