import { create } from "zustand";

const useAnimationStore = create((set) => ({
  activeState: 0,
  setActiveState: (state) => set(() => ({ activeState: state })),
}));

export default useAnimationStore;
