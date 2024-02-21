import { type ReactNode } from "react";
import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";
import { Window } from "@shared/types/Window.interface";
import { findBiggestZIndex } from "@shared/lib/getWindowDetails";

type WindowStates = "opened" | "minimized";

interface WindowsStore {
  windows: Array<Window>;
  openWindow: (content: ReactNode) => void;
  closeWindow: (windowId: string) => void;
  changeWindowStatusTo: (windowId: string, state: WindowStates) => void;
  bringWindowToTheFront: (windowId: string) => void;
  bringWindowToTheBack: (windowId: string) => void;
  changeWindowPosition: (
    windowId: string,
    { x, y }: { x: number; y: number }
  ) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): WindowsStore => ({
  windows: [
    {
      windowId: "1",
      windowTitle: "testtest",
      windowState: "opened",
      windowContent: <div>123</div>,
      coordinates: { x: 10, y: 100, z: 1 },
    },
    {
      windowId: "2",
      windowTitle: "testtest2",
      windowState: "opened",
      windowContent: <div>1233</div>,
      coordinates: { x: 100, y: 10, z: 2 },
    },
    {
      windowId: "3",
      windowTitle: "testtest21",
      windowState: "minimized",
      windowContent: <div>minim</div>,
      coordinates: { x: 100, y: 300, z: 0 },
    },
  ],
  openWindow: (content) => {
    set((state: WindowsStore) => ({
      windows: [...state.windows, content],
    }));
  },
  closeWindow: (windowId) => {
    set((state: WindowsStore) => ({
      windows: [
        ...state.windows.filter((window) => window.windowId !== windowId),
      ],
    }));
  },
  changeWindowStatusTo: (windowId, status) => {
    set((state: WindowsStore) => {
      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );
      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].windowState = status;

      return {
        windows: [...newWindows],
      };
    });
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
  bringWindowToTheBack: (windowId) => {
    set((state: WindowsStore) => {
      const modifiedWindowIdx = state.windows.findIndex(
        (window) => window.windowId === windowId
      );

      const newWindows = [...state.windows];
      newWindows[modifiedWindowIdx].coordinates.z = 0;

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
});

export const useWindowsStore = createWithEqualityFn(
  persist(store, { name: "windows" })
);
