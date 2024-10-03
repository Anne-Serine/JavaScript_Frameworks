import { CircleCheckIcon } from "lucide-react";
import Button from "../components/Button";
import useCounterStore from "../hooks/Store";
import { useEffect } from "react";


function CheckoutSuccess() {
  const emptyCart = useCounterStore((state) => state.emptyCart);
  
  useEffect(() => {
    emptyCart()
  }, [emptyCart])

  return (
    <div className="container mx-auto flex flex-col text-center items-center gap-3 mt-10">
      <CircleCheckIcon color="green" size="100" strokeWidth={1}/>
      <h1 className="text-3xl">Thank you for ordering!</h1>
      <p className="pb-5">Your order will be shipped soon.</p>
      <Button type="primary" text="Shop more" url="/"  />
    </div>
  );
}

export default CheckoutSuccess;