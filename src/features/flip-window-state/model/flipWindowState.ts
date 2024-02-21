import { useWindowsStore } from "@app/store/windows";
import { findBiggestZIndex, getWindow } from "@shared/lib/getWindowDetails";

export const flipWindowState = (windowId: string) => {
  const changeWindowState = useWindowsStore.getState().changeWindowStatusTo;
  const changeWindowPosition = useWindowsStore.getState().changeWindowPosition;
  const bringWindowToTheBack = useWindowsStore.getState().bringWindowToTheBack;
  const bringWindowToTheFront =
    useWindowsStore.getState().bringWindowToTheFront;
  const windows = useWindowsStore.getState().windows;
  const window = getWindow(windowId);
  const biggestZIndex = findBiggestZIndex(windows);

  if (window.windowState === "minimized") {
    bringWindowToTheFront(windowId);
    changeWindowState(windowId, "opened");
  } else if (window.coordinates.z === biggestZIndex) {
    bringWindowToTheBack(windowId);
    changeWindowState(windowId, "minimized");
  } else {
    changeWindowPosition(windowId, window.coordinates);
  }
};
