import { Link } from "react-router-dom";
import useCounterStore from "../hooks/Store";

function Cart() {
  const { count } = useCounterStore((state) => state);
  
  return (
    <div className="order-4 md:order-5 relative">
      <Link to="/checkout" title="Shopping cart" className=""><img src="/assets/shopping-bag.svg" alt="shopping cart icon" className="h-7" /></Link>
      <div className="flex justify-center absolute left-5 bottom-2 p-2 size-5 rounded-full bg-red-500 text-xs items-center">{count}</div>
    </div>
  )
}

export default Cart;