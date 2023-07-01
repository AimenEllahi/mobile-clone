import { create } from "zustand";

const useColorStore = create((set) => ({
  color: "#2596be",
  setColor: (state) => set(() => ({ color: state })),
}));

export default useColorStore;
