import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BootUpStore {
  showedBootUpScreen: boolean;
  setShowedBootUpScreenTo: (value: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): BootUpStore => ({
  showedBootUpScreen: false,
  setShowedBootUpScreenTo: (state: boolean) => {
    set(() => ({
      showedBootUpScreen: state,
    }));
  },
});

export const useBootUpStore = create(persist(store, { name: "bootUpStore" }));
