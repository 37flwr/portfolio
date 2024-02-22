import { type ReactNode } from "react";
import { MinimizeWindowButton } from "@features/minimize-window";
import { CloseWindowButton } from "@features/close-window";
import { ShrinkWindowButton } from "@features/shrink-window";

function ExpandedWindowActionButtons({
  windowId,
}: {
  windowId: string;
}): ReactNode {
  return (
    <>
      <MinimizeWindowButton windowId={windowId} />
      <ShrinkWindowButton windowId={windowId} />
      <CloseWindowButton windowId={windowId} />
    </>
  );
}

export { ExpandedWindowActionButtons };
