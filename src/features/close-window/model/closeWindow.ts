import { useWindowsStore } from "@app/store/windows";

export const closeWindow = (windowId: string) => {
  const closeWindow = useWindowsStore.getState().closeWindow;

  closeWindow(windowId);
};
