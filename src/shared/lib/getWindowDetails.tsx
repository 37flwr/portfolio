import { useWindowsStore } from "@app/store/windows";
import { Window } from "@shared/types/Window.interface";

export const getWindow = (windowId: string) => {
  const window = useWindowsStore
    .getState()
    .windows.filter((window) => window.windowId === windowId)[0];

  return window;
};

export const getWindows = () => {
  const windows = useWindowsStore.getState().windows;

  return windows;
};

export const getWindowIdx = (windowId: string) => {
  const windowIdx = useWindowsStore
    .getState()
    .windows.findIndex((window) => window.windowId === windowId);

  return windowIdx;
};

export const getWindowCoordinates = (windowId: string) => {
  const coordinates = useWindowsStore
    .getState()
    .windows.filter((window) => window.windowId === windowId)[0].coordinates;

  return coordinates;
};

export const findBiggestZIndex = (windows: Array<Window>) => {
  let maxValue = Number.MIN_VALUE;
  for (let i = 0; i < windows.length; i++) {
    if (windows[i].coordinates.z > maxValue) {
      maxValue = windows[i].coordinates.z;
    }
  }
  return maxValue;
};
