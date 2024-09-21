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
        <Button text="Add to cart" type="secondary" url="" />
      </div>
    </div>
  );
}

export default SingleProduct;
