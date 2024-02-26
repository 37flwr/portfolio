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

export interface OpenWindowDTO {
  icon: keyof ApplicationIcons;
  title: string;
  application: keyof Applications;
}

export interface WindowDTO {
  windowId: string;
}

export type WindowFrameDTO = Pick<
  Window,
  | "windowSize"
  | "windowTitle"
  | "isExpanded"
  | "application"
  | "windowId"
  | "coordinates"
> & { className?: string };
