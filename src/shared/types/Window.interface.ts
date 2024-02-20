import { type ReactElement } from "react";

export interface IWindow {
  windowId: string;
  windowTitle: string;
  windowState: "opened" | "minimized" | "maximized";
  windowContent: ReactElement;
}
