import { useWindowsStore } from "@app/store/windows";

export const getWindow = (windowId: string) => {
  const window = useWindowsStore
    .getState()
    .windows.filter((window) => window.windowId === windowId)[0];

  return window;
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
