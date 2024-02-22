import { type ReactElement } from "react";

export type WindowStates = "opened" | "minimized" | "expanded";

export interface Window {
  windowId: string;
  windowIcon: ReactElement;
  windowTitle: string;
  windowSize: { w: number; h: number };
  isExpanded: boolean;
  windowState: WindowStates;
  windowContent: ReactElement;
  coordinates: { x: number; y: number; z: number };
}

export interface NewWindow {
  Icon: ReactElement;
  title: string;
  Content: ReactElement;
}
