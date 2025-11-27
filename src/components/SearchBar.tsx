import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-white px-4 py-3 shadow-sm border-b border-gray-200">
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
  );
};

export default SearchBar;

