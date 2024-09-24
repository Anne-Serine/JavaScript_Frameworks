import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  products: [],
  increment: (id) =>
    set((state) => ({
      products: state.products.map((obj) =>
        obj.product === id
          ? { ...obj, qty: obj.qty + 1 }
          : obj
      ),
    })),
  // incrementAsync: async (id) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   (state) => ({
  //     products: state.products.map((obj) =>
  //       obj.product === id
  //         ? { ...obj, qty: obj.qty === 1 ? 1 : obj.qty + 1 }
  //         : obj
  //     ),
  //   });
  // },
  decrement: (id) =>
    set((state) => ({
      products: state.products.map((obj) =>
        obj.product === id
          ? { ...obj, qty: obj.qty === 1 ? 1 : obj.qty - 1 }
          : obj
      ),
  })),
  addToCart: (id, qty) =>
    set((state) =>
      !state.products.some((obj) => obj.product === id)
        ? {
            count: state.count + 1,
            products: [...state.products, { product: id, qty: qty }],
          }
        : { count: state.count, products: state.products }
    ),
  emptyCart: () =>
    set(() => ({
      count: 0,
      products: [],
    })),
}));

export default useCounterStore;
