import { Link } from "react-router-dom";

function CategoryThumb({ name, icon }) {
  return (
    <Link
      to="#"
      className="flex flex-col items-center p-3 gap-4"
      onClick={(e) => e.preventDefault()}
    >
      <div className="bg-ecom-black size-20 flex justify-center items-center rounded-full">
        {icon}
      </div>
      {name}
    </Link>
  );
}

export default CategoryThumb;
