import StarRating from "./StarRating";

function ReviewCard({username, description, rating}) {
  return (
    <div className="bg-ecom-white flex-none w-[18rem] p-4 rounded-sm shadow-md">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{username}</p>
          <StarRating rating={rating} color="text-orange-400"/>
        </div>
      <div className="mt-5">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ReviewCard;