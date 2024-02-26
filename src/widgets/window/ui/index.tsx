import { type ReactNode } from "react";
import { useWindowsStore } from "@app/store/windows";
import { DraggableWindow } from "@features/drag-window";
import { WindowFrame } from "./WindowFrame";
import { WindowDTO } from "@shared/types/Window.interface";
import { WindowContext } from "../model/windowContext";

function Window({ windowId }: WindowDTO): ReactNode {
  const window = useWindowsStore((store) =>
    store.windows.filter((window) => window.windowId === windowId)
  )[0];

  if (window.isExpanded) {
    return (
      <WindowContext.Provider value={window}>
        <div style={{ position: "absolute", zIndex: window.coordinates.z }}>
          <WindowFrame className="expanded" />
        </div>
      </WindowContext.Provider>
    );
  }

  return (
    <WindowContext.Provider value={window}>
      <DraggableWindow windowId={windowId}>
        <WindowFrame />
      </DraggableWindow>
    </WindowContext.Provider>
  );
}

export { Window };
