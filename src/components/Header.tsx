import { ShoppingCart, Menu, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import FlipkartLogo from "./FlipkartLogo";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="px-4 py-3">
        {/* Top Row - Burger Menu, Logo, Login */}
        <div className="flex items-center justify-between mb-3">
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
              <img src="/download.svg" alt="Download" className="h-5 w-5" />
            </button>

            {/* Login */}
            <button className="flex items-center gap-1.5">
              <img src="/login.svg" alt="Login" className="h-5 w-5" />
              <span className="text-sm font-medium">Login</span>
            </button>

            {/* Cart */}
            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Delivery Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-gray-700" />
          <span className="text-sm font-semibold text-gray-900">380269</span>
          <button className="text-sm text-[#2874F0] font-medium">
            Select delivery location
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center bg-[#F0F5FF] rounded-lg px-4 py-3 border border-gray-200">
            <Search className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for Products"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
