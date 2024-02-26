import { type ReactNode } from "react";
import { shallow } from "zustand/shallow";
import { useWindowsStore } from "@app/store/windows";
import { TaskbarButton } from "@entities/taskbar-button";
import { applicationIconScheme } from "@entities/applications";
import { restoreWindow } from "../model/restoreWindow";
import { TaskbarButtonStale } from "@shared/ui/windows-buttons";
import { WindowDTO } from "@shared/types/Window.interface";

function RestoreWindow({ windowId }: WindowDTO): ReactNode {
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
