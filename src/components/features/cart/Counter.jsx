import useCounterStore from "../../../hooks/Store";


function Counter({id, qty, setQty}) {

  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (

    <div className="flex">
      <div className="flex justify-between items-center p-1 bg-ecom-light rounded-full max-h-[2rem]">
        <button
          onClick={() => { 
            decrement(id)
            setQty && setQty(qty === 1 ? 1 : qty -1)
          }}
          className="bg-ecom-dark text-ecom-light rounded-full size-5 text-sm leading-none"
          id="decreaseBtn"
          data-change-bid="decrease"
          aria-label="Decrease product amount"
        >
          -
        </button>
        <div
          id="productAmount"
          className="number-input w-16 text-center"
          aria-label="Product amount"
        >
          {qty}
        </div>
        <button
          onClick={() => {
            increment(id)
            setQty && setQty(qty +1)
          }}
          className="bg-ecom-dark text-ecom-light rounded-full size-5 text-sm leading-none"
          id="increaseBtn"
          data-change-bid="increase"
          aria-label="Increase product amount"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;