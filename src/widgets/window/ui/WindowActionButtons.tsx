import { type ReactNode } from "react";
import { MinimizeWindowButton } from "@features/minimize-window";
import { CloseWindowButton } from "@features/close-window";
import { ExpandWindowButton } from "@features/expand-window";

function WindowActionButtons({ windowId }: { windowId: string }): ReactNode {
  return (
    <>
      <MinimizeWindowButton windowId={windowId} />
      <ExpandWindowButton windowId={windowId} />
      <CloseWindowButton windowId={windowId} />
    </>
  );
}

export { WindowActionButtons };
