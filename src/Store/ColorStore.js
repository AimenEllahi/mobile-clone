import { create } from "zustand";

const useColorStore = create((set) => ({
  color: "#9fb6d0",
  setColor: (state) => set(() => ({ color: state })),
}));

export default useColorStore;
