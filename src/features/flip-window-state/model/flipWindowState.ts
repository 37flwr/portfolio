import { useWindowsStore } from "@app/store/windows";
import { findBiggestZIndex, getWindow } from "@shared/lib/getWindowDetails";

export const flipWindowState = (windowId: string) => {
  const changeWindowState = useWindowsStore.getState().changeWindowStatusTo;
  const saveWindowPosition = useWindowsStore.getState().saveWindowPosition;
  const windows = useWindowsStore.getState().windows;
  const window = getWindow(windowId);
  const biggestZIndex = findBiggestZIndex(windows);

  if (window.windowState === "minimized") {
    changeWindowState(windowId, "opened");
  } else if (window.coordinates.z === biggestZIndex) {
    changeWindowState(windowId, "minimized");
  } else {
    saveWindowPosition(windowId, window.coordinates);
  }
};
