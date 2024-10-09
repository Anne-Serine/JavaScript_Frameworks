import { Link } from "react-router-dom";
import useCounterStore from "../../../hooks/Store";
import { ShoppingBag } from "lucide-react";

function Cart() {
  const totalCount = useCounterStore((state) => state.totalCount(state));
  
  return (
    <div className="order-3 md:order-4 relative mr-4">
      <Link to="/checkout" title="Shopping cart" className="">
        <ShoppingBag color="white" size="25" strokeWidth={1}/>
        <div className="flex justify-center absolute left-4 -bottom-2 p-2 size-5 rounded-full bg-red-600 text-xs items-center">{totalCount}</div>
      </Link>
    </div>
  )
}

export default Cart;