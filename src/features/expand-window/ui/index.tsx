import { type ReactNode } from "react";
import { expandWindow } from "../model/expandWindow";
import { ButtonWithActiveStaleStates } from "@entities/button-with-states";
import { TaskbarButtonActive } from "@shared/ui/buttons/taskbar-button";
import testIcon from "@shared/assets/icons/close-button.svg";

interface ICloseWindow {
  windowId: string;
}

function ExpandWindow({ windowId }: ICloseWindow): ReactNode {
  return (
    <ButtonWithActiveStaleStates
      active={
        <TaskbarButtonActive
          Icon={<img src={testIcon} alt="" />}
          title={windowId}
        />
      }
      stale={
        <TaskbarButtonActive
          Icon={<img src={testIcon} alt="" />}
          title={windowId}
        />
      }
      onClick={() => expandWindow(windowId)}
    />
  );
}

export { ExpandWindow };
