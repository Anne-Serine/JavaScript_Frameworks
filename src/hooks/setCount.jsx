import useCounterStore from "./Store"

const setCount = () => {
  useCounterStore.setState({ count: 1 });
}

export default setCount;