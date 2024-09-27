import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../hooks/Store";
import { useNavigate } from "react-router-dom";

function Search() {
  const products = useProducts((state) => state.allProducts);
  const getAllProducts = useProducts((state) => state.getAllProducts);
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
  }, [getAllProducts]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const handleProductClick = (id => {
    navigate(`/product/${id}`);
    setSearchTerm("");
    setFilteredProducts([]);
  })

  return (
    <div
      className="flex gap-2 items-center relative order-5 md:order-4 w-full md:w-auto"
      id="searchContainer"
    >
      <img
        src="/assets/search-svgrepo-com.svg"
        className="h-4"
        alt="search-icon"
      />
      <input
        type="search"
        placeholder="Search..."
        className="w-full p-1 border border-solid border-ecom-dark rounded-sm"
        id="searchInput"
        aria-label="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul id="searchResults" className="absolute top-full left-6 bg-ecom-white border border-solid border-ecom-dark w-full p-1">
          {filteredProducts.length ? (
            filteredProducts.map(product => (
              <li 
                key={product.id}
                className="hover:bg-ecom-light hover:font-medium cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                {product.title}
              </li>
            ))
          ) : (
            <li className="font-medium">No products found</li>
          )}
        </ul>
      )}
      {/* // <div>
        
      //   <div className="hidden">
      //     alert message
      //   </div>
      // </div> */}
    </div>
  )
}

export default Search;