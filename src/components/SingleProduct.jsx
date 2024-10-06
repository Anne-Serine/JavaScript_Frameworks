import { useEffect, useState } from "react";
import useCounterStore from "../hooks/Store";
import Button from "./Button";
import StarRating from "./StarRating";
import Counter from "./counter";
import Popup from "./Popup";

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
  const [qty, setQty] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // Reset quantity when product id changes
  useEffect(() => {
    setQty(1);
  }, [id]);

  // If the product is already in the cart, update quantity
  useEffect(() => {
    const productInCart = products.find((obj) => obj.product.id === id);
    if (productInCart) {
      setQty(productInCart.qty);
    }
  }, [products, id]);

  return (
    <div className="flex flex-wrap gap-10 pb-5">
      <div className="w-full md:w-7/12">
        <img
          src={image}
          alt=""
          className="size-full max-h-[40rem] object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 flex-1 max-w-[30rem]">
        <h1 className="text-4xl font-medium">{name}</h1>
        {rating !== undefined && (
          <StarRating rating={rating} color="text-orange-400" />
        )}
        <div className="flex flex-col gap-2">
          <p className="mb-10">{description}</p>
          <p className="font-semibold">{discountedPrice} NOK</p>
          {price !== discountedPrice && (
            <div className="flex gap-2 text-center">
              <p className="line-through">{price} NOK</p>
              <p className="text-red-400">
                Save: {(price - discountedPrice).toFixed(2)} NOK
              </p>
            </div>
          )}
        </div>
        <Counter id={id} qty={qty} setQty={(i) => setQty(i)} />
        <Button
          id={id}
          onClick={() => {
            addToCart(id, qty);
            setPopupMessage(`${name} was added to cart`);
            setShowPopup(true);

            // Hide the popup after 3 seconds
            setTimeout(() => {
              setShowPopup(false);
            }, 3000);
          }}
          text="Add to cart"
          type="primary"
        />
        <Popup show={showPopup} message={popupMessage} />
      </div>
    </div>
  );
}

export default SingleProduct;
