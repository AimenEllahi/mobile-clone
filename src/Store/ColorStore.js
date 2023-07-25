import { create } from "zustand";

const useColorStore = create((set) => ({
  color: "#e7e9ed",
  setColor: (state) => set(() => ({ color: state })),
}));

export default useColorStore;
