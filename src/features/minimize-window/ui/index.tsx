import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { minimizeWindow } from "../model/minimizeWindow";

interface ICloseWindow {
  windowId: string;
}

function MinimizeWindow({ windowId }: ICloseWindow): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => minimizeWindow(windowId)}
      type="minimize"
    />
  );
}

export { MinimizeWindow };
