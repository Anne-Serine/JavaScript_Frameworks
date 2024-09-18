import { Link } from "react-router-dom";

function CategoryThumb({ name, icon }) {
  return (
    <Link to="#" className="flex flex-col items-center p-3">
      <div className="bg-ecom-black p-1 size-16 flex justify-center items-center rounded-full">
        {icon}
      </div>
      {name}
    </Link>
  );
}

export default CategoryThumb;
