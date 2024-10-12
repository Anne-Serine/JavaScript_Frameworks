import { Link } from "react-router-dom";

function ProductCard({ name, price, image, discountPrice, id }) {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-ecom-white rounded-md font-semibold text-lg max-w-[24rem] shadow-md w-full"
    >
      <div className="relative border-b-2 border-ecom-dark">
        <img
          src={image}
          alt={name}
          className="rounded-t-md w-full h-80 object-cover"
        />
        {price !== discountPrice && (
          <div className="absolute rounded-full bg-ecom-black text-yellow-500 text-sm font-normal size-12 flex items-center justify-center top-3 right-2">
            SALE
          </div>
        )}
      </div>
      <div className="relative flex justify-center">
        <span className="absolute -top-3.5 mx-auto bg-ecom-dark text-ecom-white px-10 rounded-full font-normal">
          {discountPrice} NOK
        </span>
      </div>
      <div className="p-4 pt-7">{name}</div>
    </Link>
  );
}

export default ProductCard;
