import Button from "./Button";
import StarRating from "./StarRating";

function SingleProduct({
  image,
  name,
  description,
  rating,
  discountedPrice,
  price,
}) {
  return (
    <div className="flex flex-wrap gap-10 pb-5">
      <div className=" object-cover bg-white">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-5 flex-1 ">
        <h1>{name}</h1>
        <p>{description}</p>
        {rating !== undefined && <StarRating rating={rating} color="text-orange-400"/>}
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{discountedPrice} NOK</p>
          {price !== discountedPrice && (
            <div className="flex gap-2 text-center">
              <p className="line-through">{price} NOK</p>
              <p className="text-red-400">Save: {price - discountedPrice} NOK</p>
            </div>
          )}
        </div>
        <Button text="Add to cart" type="secondary" />
      </div>
    </div>
  );
}

export default SingleProduct;
