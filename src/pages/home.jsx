// import { useState, useEffect } from "react";
import { useEffect } from "react";
import CategoryThumb from "../components/CategoryThumb";
import { ShoppingCart } from "../components/icons";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/Store";

function Home() {
  const products = useProducts((state) => state.allProducts);
  const getAllProducts = useProducts((state) => state.getAllProducts);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  console.log(products);

  return (
    <>
      <div className="bg-ecom-light p-8">
        <h1 className="hero-heading mx-auto w-max">
          Welcome,<span>take a look around</span>
        </h1>
      </div>
      <div className="container">
        <div className="flex justify-between overflow-x-auto whitespace-nowrap">
          <CategoryThumb
            name="category1"
            icon={<ShoppingCart classes="text-ecom-light" />}
          />
          <CategoryThumb
            name="category2"
            icon={<ShoppingCart classes="text-ecom-light" />}
          />
          <CategoryThumb
            name="category3"
            icon={<ShoppingCart classes="text-ecom-light" />}
          />
          <CategoryThumb
            name="category4"
            icon={<ShoppingCart classes="text-ecom-light" />}
          />
          <CategoryThumb
            name="category5"
            icon={<ShoppingCart classes="text-ecom-light" />}
          />
        </div>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="my-6 grid grid-cols-[repeat(auto-fit,minmax(18rem,_1fr))] gap-3">
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard
                  name={product.title}
                  price={product.price}
                  image={product.image.url}
                  discountPrice={product.discountedPrice}
                  key={product.id}
                  id={product.id}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
