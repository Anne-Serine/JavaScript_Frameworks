import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="hidden md:flex gap-10 items-center order-3">
            <ul className="flex justify-between gap-3">
              <li>
                <Link to="/" className="hover:font-semibold hover:text-md  hover:border-y hover:py-1 hover:border-ecom-light">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:font-semibold hover:text-md  hover:border-y hover:py-1 hover:border-ecom-light">Contact</Link>
              </li>
            </ul>
          </nav>
  )
}

export default Nav;