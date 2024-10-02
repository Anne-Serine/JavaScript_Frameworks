import { Link } from "react-router-dom";
import Cart from "./Cart";
import Nav from "./Nav";
import SearchInput from "./SearchInput";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between bg-ecom-dark text-ecom-light">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center mb-3 md:mb-0 gap-4">
        <button className="flex md:hidden order-1">
          <Menu />
        </button>
        <Link to="/" className="order-2 md:order-1">
          <img src="/assets/logo_nuuYuu.png" className="size-20" alt="logo" />
        </Link>

        <Nav />

        <SearchInput />

        <Cart />
      </div>
    </header>
  );
}

export default Header;
