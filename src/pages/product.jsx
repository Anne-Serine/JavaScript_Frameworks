import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import SingleProduct from "../components/SingleProduct";

function Product() {

  const [product, setProduct] = useState([]);
  let { id } = useParams();
  const url = `https://v2.api.noroff.dev/online-shop/${id}`;

  useEffect(() => {
    async function getProduct(){
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProduct(result.data);
      } catch (error) {
        return error
      }
    }
    getProduct()
  }, [id, url]);

  return (
    <div className="container">
      <SingleProduct image={product.image && product.image.url} name={product.title} description={product.description} rating={product.rating} discountedPrice={product.discountedPrice} price={product.price} id={id}  />
      <div className="border-black border-t-2">
        <h2 className="mb-3 mt-6">Reviews</h2> 
        <div className="flex gap-3 overflow-x-auto pb-4">
          {product.reviews && product.reviews.length > 0 ? product.reviews.map((review) => (
            <ReviewCard username={review.username} description={review.description} rating={review.rating}  key={review.id} />
          )) : 'No reviews'}
        </div>
      </div>
    </div>
  );
}

export default Product;