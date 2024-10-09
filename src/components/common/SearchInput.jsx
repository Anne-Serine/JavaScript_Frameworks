import { useEffect, useRef } from "react";
import { useState } from "react";
import { useProducts } from "../../hooks/Store";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

function SearchInput() {
  const products = useProducts((state) => state.allProducts);
  const getAllProducts = useProducts((state) => state.getAllProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setSearchTerm(""); //Clear search or hide dropdown when clicking outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);
  
  return (
    <div
      className="flex gap-2 items-center order-4 w-full mt-2 md:mt-0"
      id="searchContainer"
    >
      <Search color="white" size="25" strokeWidth={1} />
      <div ref={searchContainerRef} className="relative w-full">
        <input
          type="search"
          placeholder="Search item..."
          className="w-full p-1 px-2 border border-solid border-ecom-dark md:w-[20rem] text-ecom-dark outline-none"
          id="searchInput"
          aria-label="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <ul
            id="searchResults"
            className="absolute top-full left-0 border border-solid border-ecom-dark md:w-[20rem] bg-ecom-white text-ecom-dark w-full p-1 z-10"
          >
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="hover:bg-yellow-500 hover:bg-opacity-30 hover:font-medium p-1"
                >
                  <Link
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredProducts([]);
                    }}
                    to={`/product/${product.id}`}
                    className="flex gap-3"
                  >
                    <img src={product.image.url} alt={product.name} className="size-6 object-cover overflow-hidden" />
                    {product.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="font-medium">No products found...</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
