import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { minimizeWindow } from "../model/minimizeWindow";
import { WindowDTO } from "@shared/types/Window.interface";

function MinimizeWindow({ windowId }: WindowDTO): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => minimizeWindow(windowId)}
      type="minimize"
    />
  );
}

export { MinimizeWindow };
