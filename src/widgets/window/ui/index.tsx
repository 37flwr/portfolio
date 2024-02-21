import { type ReactNode } from "react";
import { WindowFrame } from "./WindowFrame";
import { DraggableWindow } from "@features/drag-window";

interface WindowWidget {
  windowId: string;
}

function Window({ windowId }: WindowWidget): ReactNode {
  // const window = getWindow(windowId);

  return (
    <DraggableWindow windowId={windowId}>
      <WindowFrame windowId={windowId} />
    </DraggableWindow>
  );
}

export { Window };
