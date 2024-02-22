import { ReactNode, type ReactElement } from "react";

export type WindowStates = "opened" | "minimized" | "maximized";

export interface Window {
  windowId: string;
  windowIcon: ReactElement;
  windowTitle: string;
  windowState: WindowStates;
  windowContent: ReactElement;
  coordinates: { x: number; y: number; z: number };
}

export interface NewWindow {
  Icon: ReactElement;
  title: string;
  Content: ReactElement;
}
