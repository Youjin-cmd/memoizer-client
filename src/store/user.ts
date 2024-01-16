import { create } from "zustand";

interface UserInfo {
  username: string;
  userId: string;
}

interface userStore {
  user: UserInfo;
  setUser: (userName: UserInfo) => void;
}

const useUserStore = create<userStore>(set => ({
  user: { username: "", userId: "" },
  setUser: userName => set({ user: userName }),
}));

export default useUserStore;
