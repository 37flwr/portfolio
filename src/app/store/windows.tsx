import { ReactElement, type ReactNode } from "react";
import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";

type WindowStates = "opened" | "minimized" | "maximized";

interface Window {
  windowId: string;
  windowTitle: string;
  windowState: WindowStates;
  windowContent: ReactElement;
}

interface WindowsStore {
  windows: Array<Window>;
  openWindow: (content: ReactNode) => void;
  closeWindow: (windowId: string) => void;
  changeWindowStatusTo: (windowId: string, state: WindowStates) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): WindowsStore => ({
  windows: [
    {
      windowId: "1",
      windowTitle: "testtest",
      windowState: "opened",
      windowContent: <div>123</div>,
    },
    {
      windowId: "2",
      windowTitle: "testtest2",
      windowState: "opened",
      windowContent: <div>1233</div>,
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
      const modifiedWindow = state.windows.filter(
        (window) => window.windowId === windowId
      )[0];
      modifiedWindow.windowState = status;

      return {
        windows: [
          ...state.windows.filter((window) => window.windowId !== windowId),
          modifiedWindow,
        ],
      };
    });
  },
});

export const useWindowsStore = createWithEqualityFn(
  persist(store, { name: "windows" })
);
