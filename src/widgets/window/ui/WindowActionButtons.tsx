import { type ReactNode } from "react";
import { MinimizeWindowButton } from "@features/minimize-window";
import { CloseWindowButton } from "@features/close-window";
import { ExpandWindowButton } from "@features/expand-window";
import { useWindowContext } from "../model/windowContext";
import { ShrinkWindowButton } from "@features/shrink-window";

function WindowActionButtons(): ReactNode {
  const window = useWindowContext();

  return (
    <>
      <MinimizeWindowButton windowId={window.windowId} />
      {window.isExpanded ? (
        <ShrinkWindowButton windowId={window.windowId} />
      ) : (
        <ExpandWindowButton windowId={window.windowId} />
      )}
      <CloseWindowButton windowId={window.windowId} />
    </>
  );
}

export { WindowActionButtons };
