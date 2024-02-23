import React, { type ReactNode } from "react";
import { shallow } from "zustand/shallow";
import { useWindowsStore } from "@app/store/windows";
import { TaskbarButton } from "@entities/taskbar-button";
import { TaskbarButtonStale } from "@shared/ui/windows-buttons";

import { restoreWindow } from "../model/restoreWindow";
import { applicationIconScheme } from "@entities/applications";

function RestoreWindow({ windowId }: { windowId: string }): ReactNode {
  const window = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowId === windowId)[0],
    shallow
  );

  return (
    <TaskbarButton onClick={() => restoreWindow(windowId)}>
      <TaskbarButtonStale
        Icon={applicationIconScheme[window.windowIcon]}
        title={window.windowTitle}
      />
    </TaskbarButton>
  );
}

export { RestoreWindow };
