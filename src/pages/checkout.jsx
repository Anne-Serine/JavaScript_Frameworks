import Counter from "../components/features/cart/Counter";
import useCounterStore from "../hooks/Store";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

function Checkout() {
  const products = useCounterStore((state) => state.products);
  const removeItem = useCounterStore((state) => state.removeItem);
  const emptyCart = useCounterStore((state) => state.emptyCart);

  return (
    <div className="container flex flex-col mb-2 gap-1">
      {products.length === 0 ? (
        <div>
          <h1 className="text-2xl">Checkout</h1>
          <div className="flex flex-col justify-center items-center p-20">
            <img
              src="/assets/shopping-bag.svg"
              className="size-20"
              alt={products.title}
            />
            <p className="text-xl font-medium mt-5">Your cart is empty</p>
            <p className="text-sm max-w-[18rem] text-center mb-5">
              Looks like you haven´t added anything to your cart yet
            </p>
            <Button type="secondary" text="Start shopping" url="/" />
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl">Review Your Cart</h1>
          <h2 className="text-sm">Please check the items below before proceeding</h2>
          <div className="pt-8">
            <ul>
              {products.map((obj) => (
                <li key={obj.product.id} className="py-1">
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 bg-ecom-white p-4 rounded-md shadow-sm">
                    <div className="flex-none w-full max-h-[10rem] max-w-[10rem] ">
                      <img
                        src={obj.product.image.url}
                        className="h-[10rem] w-[10rem] object-cover object-center overflow-hidden"
                        alt={obj.product.title}
                      />
                    </div>
                    <div className="flex md:flex-1 flex-wrap justify-between">
                      <div className="max-w-[24rem]">
                        <Link
                          to={`/product/${obj.product.id}`}
                        >
                          <h2 className="text-xl font-semibold mb-3">
                            {obj.product.title}
                          </h2>
                        </Link>
                        <p>{obj.product.description}</p>
                      </div>
                      <div className="flex flex-wrap mt-6 sm:mt-0 w-full justify-between items-end">
                        <div className="flex gap-5 font-semibold">
                          <p> Item price:</p>
                          <p>{obj.product.discountedPrice} NOK</p>
                        </div>
                        <div className="flex justify-between gap-5 mt-6 sm:mt-0">
                          <Counter id={obj.product.id} qty={obj.qty} />
                          <button
                            title={`Remove ${obj.product.title}`}
                            onClick={() => removeItem(obj.product.id)}
                            className=""
                          >
                            <img
                              src="/assets/delete-remove.svg"
                              alt="remove item icon"
                              className="size-5"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {products.length > 0 && (
            <div className="flex justify-start py-5 items-center">
              <Button
                onClick={emptyCart}
                text="Empty cart"
                type="clear"
                icon={<img
                  src="/assets/trash-can.svg"
                  alt="trash can icon"
                  className="size-5"
                />}
              />
            </div>
          )}
          <div className="flex flex-col justify-end border-t py-5 border-ecom-dark">
            <div className="flex justify-end gap-10 font-bold">
              <p>Total: </p>
              <p>{products.reduce((sum, item) => sum + item.product.discountedPrice * item.qty, 0).toFixed(2)} NOK</p>
            </div>
            <div className="flex justify-end mt-10">
              <Button text="Checkout" type="checkout" url="/checkout/success" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
