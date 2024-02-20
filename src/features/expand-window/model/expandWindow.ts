import { useWindowsStore } from "@app/store/windows";

export const expandWindow = (windowId: string) => {
  const expandWindow = useWindowsStore.getState().changeWindowStatusTo;

  expandWindow(windowId, "opened");
};
