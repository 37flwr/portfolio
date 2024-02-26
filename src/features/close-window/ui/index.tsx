import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { closeWindow } from "../model/closeWindow";
import { WindowDTO } from "@shared/types/Window.interface";

function CloseWindow({ windowId }: WindowDTO): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => closeWindow(windowId)}
      type="close"
    />
  );
}

export { CloseWindow };
