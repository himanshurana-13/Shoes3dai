
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-lg">
      <h1 className="text-2xl font-bold">🏷️ 3D Model Viewer</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search models..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </header>
  );
};

export default Navbar;
