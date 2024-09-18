import { Link } from "react-router-dom";
import Cart from "./Cart";
import Nav from "./Nav";
import Search from "./Search";

function Header() {
  return (
    <header className="flex justify-between">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center mb-3 md:mb-0 gap-4">
        <button className="flex md:hidden order-1">
          <img src="/assets/menu.svg" className="size-7" alt="menu icon" />
        </button>
        <Link to="/" className="order-2 md:order-1">
          <img src="/assets/logo.svg" className="h-10" alt="logo" />
        </Link>

        <Nav />

        <Search />

        <Cart />
      </div>
    </header>
  );
}

export default Header;
