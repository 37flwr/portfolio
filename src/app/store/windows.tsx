import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import { NewWindow, Window } from "@shared/types/Window.interface";
import { findBiggestZIndex } from "@shared/lib/getWindowDetails";
import testIcon from "@shared/assets/icons/minimize-active.svg";

interface WindowsStore {
  windows: Array<Window>;
  openWindow: (newWindowInfo: NewWindow) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  restoreWindow: (windowId: string) => void;
  bringWindowToTheFront: (windowId: string) => void;
  changeWindowPosition: (
    windowId: string,
    { x, y }: { x: number; y: number }
  ) => void;
  expandWindow: (windowId: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): WindowsStore => ({
  windows: [
    {
      windowId: "1",
      windowTitle: "testtest",
      windowState: "opened",
      windowContent: <div>123</div>,
      windowIcon: <img src={testIcon} alt="" />,
      coordinates: { x: 10, y: 100, z: 1 },
    },
    {
      windowId: "2",
      windowTitle: "testtest2",
      windowState: "opened",
      windowContent: <div>1233</div>,
      windowIcon: <img src={testIcon} alt="" />,
      coordinates: { x: 100, y: 10, z: 2 },
    },
    {
      windowId: "3",
      windowTitle: "testtest21",
      windowState: "minimized",
      windowContent: <div>minim</div>,
      windowIcon: <img src={testIcon} alt="" />,
      coordinates: { x: 100, y: 300, z: 0 },
    },
  ],
  openWindow: (newWindowInfo) => {
    set((state: WindowsStore) => {
      const newWindow: Window = {
        windowId: uuid(),
        windowTitle: newWindowInfo.title,
        windowState: "opened",
        windowContent: newWindowInfo.Content,
        windowIcon: newWindowInfo.Icon,
        coordinates: {
          x: 100,
          y: 100,
          z: findBiggestZIndex(state.windows) + 1,
        },
      };

      return { windows: [...state.windows, newWindow] };
    });
  },
  closeWindow: (windowId) => {
    set((state: WindowsStore) => ({
      windows: [
        ...state.windows.filter((window) => window.windowId !== windowId),
      ],
    }));
  },
  bringWindowToTheFront: (windowId) => {
    set((state: WindowsStore) => {
      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );
      const biggestZIndex = findBiggestZIndex(state.windows);

      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].coordinates.z = biggestZIndex + 1;

      return {
        windows: [...newWindows],
      };
    });
  },
  minimizeWindow: (windowId) => {
    set((state: WindowsStore) => {
      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );

      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].coordinates.z = 0;
      newWindows[modifiedWindowIdx].windowState = "minimized";

      return {
        windows: [...newWindows],
      };
    });
  },
  restoreWindow: (windowId) => {
    set((state: WindowsStore) => {
      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );

      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].coordinates.z =
        findBiggestZIndex(state.windows) + 1;
      newWindows[modifiedWindowIdx].windowState = "opened";

      return {
        windows: [...newWindows],
      };
    });
  },
  changeWindowPosition: (windowId, coordinates) => {
    set((state: WindowsStore) => {
      const highestZIndex = findBiggestZIndex(state.windows);

      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );

      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].coordinates = {
        ...coordinates,
        z:
          // If window's z index is the highest - dont change it
          state.windows[modifiedWindowIdx].coordinates.z === highestZIndex
            ? highestZIndex
            : highestZIndex + 1,
      };

      return {
        windows: [...newWindows],
      };
    });
  },
  expandWindow: (windowId) => {
    set((state: WindowsStore) => {
      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );
      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].windowState = "expanded";
      newWindows[modifiedWindowIdx].coordinates.z =
        findBiggestZIndex(state.windows) + 1;

      return {
        windows: [...newWindows],
      };
    });
  },
});

export const useWindowsStore = createWithEqualityFn(
  persist(store, { name: "windows" })
);
