import { type ReactNode } from "react";
import { useWindowsStore } from "@app/store/windows";
import { OpenStartMenuButton } from "@features/open-start-menu";

import "./styles.scss";
import { TaskbarButton } from "@features/flip-window-state";

function Taskbar(): ReactNode {
  const windows = useWindowsStore((store) => store.windows);

  return (
    <div className="taskbar">
      <div className="taskbar__start-button">
        <OpenStartMenuButton />
      </div>
      {windows.map((window) => (
        <TaskbarButton key={window.windowId} windowId={window.windowId} />
      ))}
    </div>
  );
}

export { Taskbar };
