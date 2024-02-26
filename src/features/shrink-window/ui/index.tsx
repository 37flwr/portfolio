import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { shrinkWindow } from "../model/shrinkWindow";
import { WindowDTO } from "@shared/types/Window.interface";

function ShrinkWindow({ windowId }: WindowDTO): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => shrinkWindow(windowId)}
      type="shrink"
    />
  );
}

export { ShrinkWindow };
