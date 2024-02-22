import React, { type ReactNode } from "react";
import { shallow } from "zustand/shallow";
import { useWindowsStore } from "@app/store/windows";
import { TaskbarButton } from "@entities/taskbar-button";
import { TaskbarButtonStale } from "@shared/ui/buttons/taskbar-button";

import { restoreWindow } from "../model/restoreWindow";

function RestoreWindow({ windowId }: { windowId: string }): ReactNode {
  const window = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowId === windowId)[0],
    shallow
  );

  return (
    <TaskbarButton onClick={() => restoreWindow(windowId)}>
      <TaskbarButtonStale
        Icon={React.createElement(
          window.windowIcon.type,
          window.windowIcon.props
        )}
        title={window.windowTitle}
      />
    </TaskbarButton>
  );
}

export { RestoreWindow };
