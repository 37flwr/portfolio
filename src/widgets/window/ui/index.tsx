import { type ReactNode } from "react";
import { WindowFrame } from "./WindowFrame";
import { DraggableWindow } from "@features/drag-window";
import { useWindowsStore } from "@app/store/windows";

interface WindowWidget {
  windowId: string;
}

function Window({ windowId }: WindowWidget): ReactNode {
  // const window = getWindow(windowId);

  const window = useWindowsStore((store) =>
    store.windows.filter((window) => window.windowId === windowId)
  )[0];

  if (window.isExpanded) {
    return (
      <div style={{ position: "absolute", zIndex: window.coordinates.z }}>
        <WindowFrame windowId={windowId} className="expanded" />
      </div>
    );
  }

  return (
    <DraggableWindow windowId={windowId}>
      <WindowFrame windowId={windowId} />
    </DraggableWindow>
  );
}

export { Window };
