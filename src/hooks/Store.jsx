import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set) => ({
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
                products: [...state.products, { product: response.data, qty: qty }],
              }
            : {
                products: state.products,
              }
        );
      },
      totalCount: (state) => state.products.reduce((acc, obj) => acc + obj.qty, 0),
      removeItem: (id) => set(
        (state) => ({
          products: state.products.filter(obj => obj.product.id !== id)
        })
      ),
      emptyCart: () =>
        set(() => ({
          products: [],
        })
      ),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

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

