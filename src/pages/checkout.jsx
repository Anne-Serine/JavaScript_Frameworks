import Counter from "../components/counter";
import useCounterStore from "../hooks/Store";
import Button from "../components/Button";

function Checkout() {
  const products = useCounterStore((state) => state.products);
  const removeItem = useCounterStore((state) => state.removeItem);
  const emptyCart = useCounterStore((state) => state.emptyCart);

  console.log(products)


  return (
    <div>
      <h1>Checkout</h1>

      <ul>
        {products.map((obj) => (
          <li key={obj.product.id}>
            <div className="bg-ecom-white max-w-[18rem] flex ">
              <div>
                <img
                  src="/assets/facebook-color.svg"
                  className="size-20"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-lg">{obj.product.title}</h2>
                <p>{obj.product.description}</p>
                <Counter id={obj.product.id} qty={obj.qty} />
                <Button
                  label="Remove"
                  onClick={() => removeItem(obj.product.id)}
                  text="Remove item"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {products.length > 0 && (
        <Button
          label="Empty cart"
          onClick={emptyCart}
          text="Empty cart"
        />
      )}
    </div>
  );
}

export default Checkout;
