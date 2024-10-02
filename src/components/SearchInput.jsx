import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../hooks/Store";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function SearchInput() {
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
      className="flex gap-2 items-center order-5 md:order-4 w-full md:w-auto"
      id="searchContainer"
    >
      <Search color="white" size="25" strokeWidth={1}/>
      <div className="relative w-full">
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
          <ul id="searchResults" className="absolute top-full left-0 border border-solid border-ecom-dark md:w-[20rem] bg-ecom-white text-ecom-dark w-full p-2">
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
              <li className="font-medium">No products found...</li>
            )}
          </ul>
        )}
        {/* // <div>
          
        //   <div className="hidden">
        //     alert message
        //   </div>
        // </div> */}
      </div>
    </div>
  )
}

export default SearchInput;