import Counter from "../components/counter";
import useCounterStore from "../hooks/Store";


function Checkout() {

  const products = useCounterStore((state) => state.products)
  // const emptyCart = useCounterStore((state) => state.emptyCart)

  return (

    <div>
      <h1>Checkout</h1>

      <ul>{products.map((obj) => (
        <li key={obj.product}>

            <div className="bg-ecom-white max-w-[18rem] flex ">
              <div>
                <img
                  src="/assets/facebook-color.svg"
                  className="size-20"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-lg">{obj.product}</h2>
                <p>something</p>
                <Counter id={obj.product} qty={obj.qty} />
              </div>
            </div>
          
        </li>
      ))}
      </ul>
    </div>

  );
}

export default Checkout;
