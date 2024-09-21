import { CircleCheckIcon } from "lucide-react";
import Button from "../components/Button";

function CheckoutSuccess() {
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