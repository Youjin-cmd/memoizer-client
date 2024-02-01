import { create } from "zustand";
import { IView } from "../types/type";

interface headerStore {
  currentView: IView;
  setCurrentView: (newView: IView) => void;
}

const useHeaderStore = create<headerStore>(set => ({
  currentView: "login",
  setCurrentView: newView => set({ currentView: newView }),
}));

export default useHeaderStore;
