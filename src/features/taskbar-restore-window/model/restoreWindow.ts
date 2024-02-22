import { useWindowsStore } from "@app/store/windows";

export const restoreWindow = (windowId: string) => {
  const restoreWindow = useWindowsStore.getState().restoreWindow;

  restoreWindow(windowId);
};
