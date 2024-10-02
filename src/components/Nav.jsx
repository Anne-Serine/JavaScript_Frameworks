import { Link } from "react-router-dom";

function Nav({isOpen}) {
  
  
  return (
      <nav className={`absolute left-0 top-24 md:top-auto z-10 md:relative md:flex md:order-2 gap-10 container mx-auto bg-ecom-black md:bg-transparent md:flex-nowrap justify-between items-center transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
          <li>
            <Link to="/" className="hover:font-semibold hover:text-md hover:border-y hover:py-1 hover:border-ecom-light">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:font-semibold hover:text-md hover:border-y hover:py-1 hover:border-ecom-light">Contact</Link>
          </li>
        </ul>
      </nav>   
  )
}

export default Nav;