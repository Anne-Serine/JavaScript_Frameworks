import { useEffect, useState } from "react";
import useCounterStore from "../hooks/Store";
import Button from "./Button";
import StarRating from "./StarRating";
import Counter from "./counter";

function SingleProduct({
  id,
  image,
  name,
  description,
  rating,
  discountedPrice,
  price,
}) {

  const addToCart = useCounterStore((state) => state.addToCart);
  const products = useCounterStore((state) => state.products);
  const [qty, setQty] = useState(1)

  useEffect(() => {
    products.map((obj) => obj.product.id === id && setQty(obj.qty))
  }, [products, id])

  return (
    <div className="flex flex-wrap gap-10 pb-5">
      <div className="w-full md:w-7/12">
        <img src={image} alt="" className="size-full max-h-[40rem] object-cover" />
      </div>
      <div className="flex flex-col gap-5 flex-1 max-w-[30rem]">
        <h1 className="text-4xl font-medium">{name}</h1>
        {rating !== undefined && <StarRating rating={rating} color="text-orange-400"/>}
        <div className="flex flex-col gap-2">
          <p className="mb-10">{description}</p>
          <p className="font-semibold">{discountedPrice} NOK</p>
          {price !== discountedPrice && (
            <div className="flex gap-2 text-center">
              <p className="line-through">{price} NOK</p>
              <p className="text-red-400">Save: {price - discountedPrice} NOK</p>
            </div>
          )}
        </div>
        <Counter id={id} qty={qty} setQty={(i) => setQty(i) } />
        <Button id={id} onClick={(e) => addToCart(e,qty)} text="Add to cart" type="secondary" />
      </div>
    </div>
  );
}

export default SingleProduct;
