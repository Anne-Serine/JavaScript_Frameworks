import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  products: [],
  increment: (id) =>
    set((state) => ({
      products: state.products.map((obj) =>
        obj.product.id === id ? { ...obj, qty: obj.qty + 1 } : obj
      ),
    })),
  decrement: (id) =>
    set((state) => ({
      products: state.products.map((obj) =>
        obj.product.id === id
          ? { ...obj, qty: obj.qty === 1 ? 1 : obj.qty - 1 }
          : obj
      ),
    })),
  addToCart: async (id, qty) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}${id}`).then((res) => res.json());
    set((state) =>
      !state.products.some((obj) => obj.product.id === id)
        ? {
            count: state.count + qty,
            products: [...state.products, { product: response.data, qty: qty }],
          }
        : {
            count: state.products.reduce((sum, item) => sum + item.qty, 0),
            products: state.products,
          }
    );
  },
  totalCount: (state) => state.products.reduce((acc, obj) => acc + obj.qty, 0),
  removeItem: (id) => set(
    (state) => ({
      count: state.count - state.products.find(obj => obj.product.id === id).qty,
      products: state.products.filter(obj => obj.product.id !== id)
    })
  ),
  emptyCart: () =>
    set(() => ({
      count: 0,
      products: [],
    })
  ),
}));

export const useProducts = create((set) => ({
  allProducts: [],
  getAllProducts: async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}`).then((res) => res.json());
    set(() => ({
      allProducts: response.data
    }))  
  },
}));

export default useCounterStore;

