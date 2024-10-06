import useCounterStore from "./Store";

const handleAddToCart = () => {
   useCounterStore.handleAddToCart({ quantity: 1 });
};

export default handleAddToCart;