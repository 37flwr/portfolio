import { useWindowsStore } from "@app/store/windows";

export const minimizeWindow = (windowId: string) => {
  const minimizeWindow = useWindowsStore.getState().minimizeWindow;

  minimizeWindow(windowId);
};
