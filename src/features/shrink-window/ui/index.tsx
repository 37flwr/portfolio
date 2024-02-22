import { type ReactNode } from "react";
import { WindowActionButtonFactory } from "@entities/window-action-button-factory";
import { shrinkWindow } from "../model/shrinkWindow";

function ShrinkWindow({ windowId }: { windowId: string }): ReactNode {
  return (
    <WindowActionButtonFactory
      onClick={() => shrinkWindow(windowId)}
      type="shrink"
    />
  );
}

export { ShrinkWindow };
