import { type ReactNode } from "react";
import { useWindowsStore } from "@app/store/windows";
import { TaskbarMinimizeWindowButton } from "@features/taskbar-minimize-window";
import { findBiggestZIndex } from "@shared/lib/getWindowDetails";
import { TaskbarBringWindowToTheFrontButton } from "@features/taskbar-bring-window-to-the-front";
import { TaskbarRestoreWindowButton } from "@features/taskbar-restore-window";

function TaskbarButton({ windowId }: { windowId: string }): ReactNode {
  const windows = useWindowsStore((store) => store.windows);
  const window = windows.filter((window) => window.windowId === windowId)[0];
  const windowIsOnTheFront =
    findBiggestZIndex(windows) === window.coordinates.z;

  if (window.windowState === "minimized") {
    return <TaskbarRestoreWindowButton windowId={windowId} />;
  }

  if (windowIsOnTheFront) {
    return <TaskbarMinimizeWindowButton windowId={windowId} />;
  }

  return <TaskbarBringWindowToTheFrontButton windowId={windowId} />;
}

export { TaskbarButton };
