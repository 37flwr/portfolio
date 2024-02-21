import { type ReactNode } from "react";
import { ExpandWindowButton } from "@features/taskbar-expand-window";
import { MinimizeWindowButton } from "@features/taskbar-minimize-window";
import { findBiggestZIndex, getWindow } from "@shared/lib/getWindowDetails";
import { useWindowsStore } from "@app/store/windows";

function TaskbarButton({ windowId }: { windowId: string }): ReactNode {
  const window = getWindow(windowId);
  const windows = useWindowsStore((store) => store.windows);
  return (
    // <>
    //   {window.windowState === "minimized" ? (
    //     <ExpandWindowButton windowId={window.windowId} key={window.windowId} />
    //   ) : (
    //     <MinimizeWindowButton
    //       windowId={window.windowId}
    //       key={window.windowId}
    //     />
    //   )}
    // </>
    <>
      {findBiggestZIndex(windows) === window.coordinates.z ? (
        <MinimizeWindowButton
          windowId={window.windowId}
          key={window.windowId}
        />
      ) : (
        <ExpandWindowButton windowId={window.windowId} key={window.windowId} />
      )}
    </>
  );
}

export { TaskbarButton };
