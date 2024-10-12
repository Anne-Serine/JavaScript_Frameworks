import { Link } from "react-router-dom";

function Button({ text, type, url, onClick, id, icon }) {
  const base =
    "flex gap-2 items-center justify-center border border-ecom-dark min-w-28 w-max max-h-10 rounded-sm p-2 px-3 transition duration-100 ease-out hover:ease-in text-center";
  const primary = "bg-ecom-dark hover:bg-ecom-black text-ecom-light";
  const secondary = "bg-ecom-bg hover:bg-yellow-500";
  const clear = "border border-red-700 bg-red-100 hover:bg-red-700";
  const checkout = "bg-ecom-dark hover:bg-green-700 text-ecom-light";
  const submit =
    "bg-yellow-500 hover:bg-yellow-400 hover:font-semibold transition";

  const style =
    type === "primary"
      ? primary
      : type === "secondary"
      ? secondary
      : type === "clear"
      ? clear
      : type === "checkout"
      ? checkout
      : type === "submit"
      ? submit
      : primary;

  return url ? (
    <Link to={url} className={base + " " + style}>
      {icon && icon}
      {text}
    </Link>
  ) : (
    <button
      value={id}
      onClick={(e) => onClick(e.target.value)}
      className={base + " " + style}
      id={id}
    >
      {icon && icon}
      {text}
    </button>
  );
}

export default Button;
