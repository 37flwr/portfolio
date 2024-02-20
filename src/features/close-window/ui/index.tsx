import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { closeWindow } from "../model/closeWindow";

interface ICloseWindow {
  windowId: string;
}

function CloseWindow({ windowId }: ICloseWindow): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => closeWindow(windowId)}
      type="close"
    />
  );
}

export { CloseWindow };
