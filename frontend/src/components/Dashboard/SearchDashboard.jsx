import { FaSearch } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";

const SearchDashboard = ({ search, setSearch, setCurrentPage, setFilterCity, filterCity, cities }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Search Box */}
        <div className="relative w-full sm:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* City Filter */}
        <div className="relative w-full sm:w-1/4">
          <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            value={filterCity}
            onChange={(e) => {
              setFilterCity(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none"
          >
            <option value="all">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
