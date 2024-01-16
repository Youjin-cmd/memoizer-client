import { create } from "zustand";

type View =
  | "login"
  | "main"
  | "practice"
  | "result"
  | "topics"
  | "questions"
  | "new"
  | "edit"
  | "settings";

interface headerStore {
  currentView: View;
  setCurrentView: (newView: View) => void;
}

const useHeaderStore = create<headerStore>(set => ({
  currentView: "login",
  setCurrentView: newView => set({ currentView: newView }),
}));

export default useHeaderStore;
