import { Link } from "react-router-dom";
import Cart from "../features/cart/Cart";
import Nav from "../layout/Nav";
import SearchInput from "../common/SearchInput";
import { useState } from "react";
import { Menu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-ecom-dark text-ecom-light">
      <div className="container flex flex-wrap md:flex-nowrap items-center mb-3 md:mb-0 gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex order-1 w-auto md:hidden"
        >
          <Menu />
        </button>

        <Link
          to="/"
          className="order-2 mx-auto ps-4 md:ps-0 md:mx-0 md:order-1 "
        >
          <img
            src="/assets/logo_nuuYuu.png"
            className="w-20 md:w-52 lg:w-42"
            alt="logo"
          />
        </Link>

        <Nav isOpen={isOpen} />

        <SearchInput />

        <Cart />
      </div>
    </header>
  );
}

export default Header;
