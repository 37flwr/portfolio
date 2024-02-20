import { WindowFrame } from "@entities/window";
import React, { type ReactNode } from "react";

import { WindowActionButtonFactory } from "@entities/window-action-button-factory/ui";
import { CloseWindowButton } from "@features/close-window";
import { IWindow } from "@shared/types/Window.interface";
import { MinimizeWindowButton } from "@features/minimize-window";

function Window(props: IWindow): ReactNode {
  return (
    <WindowFrame
      title={props.windowTitle}
      windowActionButtons={
        <>
          <MinimizeWindowButton windowId={props.windowId} />
          <WindowActionButtonFactory
            onClick={() => console.log("maximize")}
            type="maximize"
            key="maximize"
          />
          <CloseWindowButton windowId={props.windowId} />
        </>
      }
    >
      {React.createElement(props.windowContent.type, props.windowContent.props)}
    </WindowFrame>
  );
}

export { Window };
