import { useWindowsStore } from "@app/store/windows";

export const shrinkWindow = (windowId: string) => {
  const shrinkWindow = useWindowsStore.getState().shrinkWindow;

  shrinkWindow(windowId);
};
