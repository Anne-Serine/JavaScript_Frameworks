import { useState } from "react";
import Counter from "../components/counter";
import useCounterStore from "../hooks/Store";
import Button from "../components/Button";

function Checkout() {
  const products = useCounterStore((state) => state.products);
  const removeItem = useCounterStore((state) => state.removeItem);
  // const emptyCart = useCounterStore((state) => state.emptyCart);

  console.log(products)
  // const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);

  // useEffect(() => {
  //   let productArray = [];
  //   async function getProduct(id) {
  //     const url = `https://v2.api.noroff.dev/online-shop/${id}`;

  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       productArray.push(result.data);
  //       console.log(result);
  //       setProduct(productArray);
  //     } catch (error) {
  //       return error;
  //     }
  //   }
  //   products.map((obj) => getProduct(obj.product));
  // }, [products]);

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
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;
