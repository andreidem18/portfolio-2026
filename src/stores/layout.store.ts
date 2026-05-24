import { create } from "zustand";

interface LayoutStore {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>()((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value) => set({ isMenuOpen: value }),
}));
