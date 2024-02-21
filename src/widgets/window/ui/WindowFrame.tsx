import React, { type ReactNode } from "react";
import { WindowActionButtons } from "./WindowActionButtons";
import { TrebuchetTextElement } from "@shared/ui/text-elements";

import "./styles.scss";
import { useWindowsStore } from "@app/store/windows";
import { shallow } from "zustand/shallow";

function WindowFrame({ windowId }: { windowId: string }): ReactNode {
  const window = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowId === windowId)[0],
    shallow
  );

  return (
    <div className="window" style={{ width: 640, height: 480 }}>
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
