import { ApplicationIcons, Applications } from "./Applications.interface";

export type WindowStates = "opened" | "minimized" | "expanded";

export interface Window {
  windowId: string;
  windowIcon: keyof ApplicationIcons;
  windowTitle: string;
  windowSize: { w: number; h: number };
  isExpanded: boolean;
  windowState: WindowStates;
  application: keyof Applications;
  coordinates: { x: number; y: number; z: number };
}

export interface NewWindow {
  icon: keyof ApplicationIcons;
  title: string;
  application: keyof Applications;
}
