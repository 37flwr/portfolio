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
  saveWindowPosition: (
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
      coordinates: { x: 10, y: 100, z: 0 },
    },
    {
      windowId: "2",
      windowTitle: "testtest2",
      windowState: "opened",
      windowContent: <div>1233</div>,
      coordinates: { x: 100, y: 10, z: 1 },
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

      if (status === "minimized") {
        newWindows[modifiedWindowIdx].coordinates.z = 0;
      } else if (status === "opened") {
        newWindows[modifiedWindowIdx].coordinates.z =
          findBiggestZIndex(state.windows) + 1;
      }

      return {
        windows: [...newWindows],
      };
    });
  },
  saveWindowPosition: (windowId, coordinates) => {
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
