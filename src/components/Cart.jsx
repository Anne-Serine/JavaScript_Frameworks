import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="order-4 md:order-5 relative">
      <Link to="/cart" title="Shopping cart" className=""><img src="/assets/shopping-bag.svg" alt="shopping cart icon" className="h-7" /></Link>
      <div className="flex justify-center absolute left-5 bottom-2 p-2 size-5 rounded-full bg-red-500 text-xs items-center">#</div>
    </div>
  )
}

export default Cart;