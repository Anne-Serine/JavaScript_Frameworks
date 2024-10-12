import { Check } from "lucide-react";

function Popup({ show, message }) {
  if (!show) return null;

  return (
    <div
      role="status"
      className="bg-ecom-bg font-medium border border-ecom-dark rounded-sm p-3 max-w-[18rem]"
    >
      <p className="flex gap-3">
        <Check color="green" />
        {message}
      </p>
    </div>
  );
}

export default Popup;
