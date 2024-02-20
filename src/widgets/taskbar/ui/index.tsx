import { type ReactNode } from "react";
import { shallow } from "zustand/shallow";
import { useWindowsStore } from "@app/store/windows";
import { OpenStartMenuButton } from "@features/open-start-menu";

import "./styles.scss";
import { ExpandWindowButton } from "@features/expand-window";

function Taskbar(): ReactNode {
  const minimizedWindows = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowState === "minimized"),
    shallow
  );
  return (
    <div className="taskbar">
      <OpenStartMenuButton />
      {minimizedWindows.map((window) => (
        <ExpandWindowButton windowId={window.windowId} key={window.windowId} />
      ))}
    </div>
  );
}

export { Taskbar };
