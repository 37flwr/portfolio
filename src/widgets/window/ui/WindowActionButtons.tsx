import { type ReactNode } from "react";
import { MinimizeWindowButton } from "@features/minimize-window";
import { CloseWindowButton } from "@features/close-window";

function WindowActionButtons({ windowId }: { windowId: string }): ReactNode {
  return (
    <>
      <MinimizeWindowButton windowId={windowId} />
      {/* <WindowActionButtonFactory
        onClick={() => console.log("maximize")}
        type="maximize"
        key="maximize"
      /> */}
      <CloseWindowButton windowId={windowId} />
    </>
  );
}

export { WindowActionButtons };
