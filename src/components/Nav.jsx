import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="hidden md:flex gap-10 items-center order-3">
            <ul className="flex justify-between gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="#">Profile</Link>
              </li>
            </ul>
          </nav>
  )
}

export default Nav;