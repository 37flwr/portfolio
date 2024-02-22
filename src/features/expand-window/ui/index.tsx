import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { expandWindow } from "../model/expandWindow";

interface ICloseWindow {
  windowId: string;
}

function ExpandWindow({ windowId }: ICloseWindow): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => expandWindow(windowId)}
      type="expand"
    />
  );
}

export { ExpandWindow };
