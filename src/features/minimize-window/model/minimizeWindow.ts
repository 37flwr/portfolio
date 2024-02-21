import { useWindowsStore } from "@app/store/windows";

export const minimizeWindow = (windowId: string) => {
  const changeWindowState = useWindowsStore.getState().changeWindowStatusTo;
  const bringWindowToTheBack = useWindowsStore.getState().bringWindowToTheBack;

  bringWindowToTheBack(windowId);
  changeWindowState(windowId, "minimized");
};
