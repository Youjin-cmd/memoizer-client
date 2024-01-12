import { create } from "zustand";

type Status = "ready" | "start" | "pause";

interface practiceStore {
  timerSetting: number;
  currentStatus: Status;
  setCurrentStatus: (status: Status) => void;
  setTimerSetting: (seconds: number) => void;
}

const usePracticeStore = create<practiceStore>(set => ({
  currentStatus: "ready",
  timerSetting: 60,
  setCurrentStatus: status => set({ currentStatus: status }),
  setTimerSetting: seconds => set({ timerSetting: seconds }),
}));

export default usePracticeStore;
