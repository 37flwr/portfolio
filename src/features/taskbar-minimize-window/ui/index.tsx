import React, { type ReactNode } from "react";
import { minimizeWindow } from "../model/minimizeWindow";
import { TaskbarButtonActive } from "@shared/ui/windows-buttons";
import { useWindowsStore } from "@app/store/windows";
import { shallow } from "zustand/shallow";
import { TaskbarButton } from "@entities/taskbar-button";
import { applicationIconScheme } from "@entities/applications";

function MinimizeWindow({ windowId }: { windowId: string }): ReactNode {
  const window = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowId === windowId)[0],
    shallow
  );
  return (
    <TaskbarButton onClick={() => minimizeWindow(windowId)}>
      <TaskbarButtonActive
        Icon={applicationIconScheme[window.windowIcon]}
        title={window.windowTitle}
      />
    </TaskbarButton>
  );
}

export { MinimizeWindow };
