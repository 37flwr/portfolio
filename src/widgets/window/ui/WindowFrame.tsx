import React, { type ReactNode } from "react";
import { WindowActionButtons } from "./WindowActionButtons";
import { getWindow, getWindowIdx } from "@shared/lib/getWindowDetails";
import { TrebuchetTextElement } from "@shared/ui/text-elements";

import "./styles.scss";

function WindowFrame({ windowId }: { windowId: string }): ReactNode {
  const window = getWindow(windowId);
  const windowIdx = getWindowIdx(windowId);

  return (
    <div
      className="window"
      style={{ width: 640, height: 480, zIndex: windowIdx }}
    >
      <div className="window__title-bar">
        <TrebuchetTextElement className="window__title-bar__text">
          {window.windowTitle}
        </TrebuchetTextElement>
        <div className="window__title-bar__controls">
          <WindowActionButtons windowId={windowId} />
        </div>
      </div>
      <div className="window__content">
        {React.createElement(
          window.windowContent.type,
          window.windowContent.props
        )}
      </div>
    </div>
  );
}

export { WindowFrame };
