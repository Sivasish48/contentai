import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-black rounded-lg shadow-md flex flex-col justify-center items-center text-white gap-6">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Browse All the Tools</h2>
        <p className="text-lg text-gray-300 mt-2">Search for the tool you need</p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 p-3 border border-purple-700 rounded-lg bg-gray-900 shadow-md">
          <Search className="text-purple-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none text-sm text-gray-300 placeholder-gray-500"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
