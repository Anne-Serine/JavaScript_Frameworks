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
    <div className="mx-auto flex flex-col items-center">
      <CircleCheckIcon color="green" size="100" strokeWidth={1}/>
      <h1>Thank you for ordering!</h1>
      <p>Your order will be shipped soon.</p>
      <Button type="primary" text="Shop more" url="/"  />
    </div>
  );
}

export default CheckoutSuccess;