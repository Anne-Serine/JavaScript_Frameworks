import { Star, StarHalf } from "lucide-react";

function StarRating({ rating, maxRating = 5, color }) {
  // Ensure the rating is between 0 and maxRating
  const clampedRating = Math.max(0, Math.min(rating, maxRating));

  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={`w-5 h-5 ${color} fill-current`} />
      ))}
      {hasHalfStar && <StarHalf className={`w-5 h-5 ${color} fill-current`} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-400" />
      ))}
      <span className="ml-2 text-sm text-gray-600">
        {clampedRating.toFixed(1)}
      </span>
    </div>
  );
}

export default StarRating;
