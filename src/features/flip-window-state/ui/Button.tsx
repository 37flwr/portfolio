import { type ReactNode } from "react";
import {
  TaskbarButtonActive,
  TaskbarButtonStale,
} from "@shared/ui/buttons/taskbar-button";
import testIcon from "@shared/assets/icons/close-button.svg";

function FlipStateButton({
  isActive,
  windowId,
}: {
  isActive: boolean;
  windowId: string;
}): ReactNode {
  return (
    <>
      {isActive ? (
        <TaskbarButtonActive
          Icon={<img src={testIcon} alt="" />}
          title={windowId}
        />
      ) : (
        <TaskbarButtonStale
          Icon={<img src={testIcon} alt="" />}
          title={windowId}
        />
      )}
    </>
  );
}

export { FlipStateButton };
