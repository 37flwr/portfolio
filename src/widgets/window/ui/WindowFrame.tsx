import React, { type ReactNode } from "react";
import cn from "classnames";
import { shallow } from "zustand/shallow";
import { useWindowsStore } from "@app/store/windows";
import { TrebuchetTextElement } from "@shared/ui/text-elements";

import { WindowActionButtons } from "./WindowActionButtons";
import "./styles.scss";
import { ExpandedWindowActionButtons } from "./ExpandedWindowActionButtons";
import { applicationScheme } from "@entities/applications";

function WindowFrame({
  windowId,
  className,
}: {
  windowId: string;
  className?: string;
}): ReactNode {
  const window = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowId === windowId)[0],
    shallow
  );

  return (
    <div
      className={cn("window", className)}
      style={{ width: window.windowSize.w, height: window.windowSize.h }}
    >
      <div className="window__title-bar">
        <TrebuchetTextElement className="window__title-bar__text">
          {window.windowTitle}
        </TrebuchetTextElement>
        <div className="window__title-bar__controls">
          {window.isExpanded ? (
            <ExpandedWindowActionButtons windowId={windowId} />
          ) : (
            <WindowActionButtons windowId={windowId} />
          )}
        </div>
      </div>
      <div className="window__content">
        {applicationScheme[window.application] || `Couldn't load application`}
      </div>
    </div>
  );
}

export { WindowFrame };
