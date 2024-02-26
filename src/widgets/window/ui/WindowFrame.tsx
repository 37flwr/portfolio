import { type ReactNode } from "react";
import cn from "classnames";
import { applicationScheme } from "@entities/applications";
import { WindowActionButtons } from "./WindowActionButtons";
import { useWindowContext } from "../model/windowContext";
import { TrebuchetTextElement } from "@shared/ui/text-elements";

import "./styles.scss";

function WindowFrame({ className }: { className?: string }): ReactNode {
  const window = useWindowContext();
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
          <WindowActionButtons />
        </div>
      </div>
      <div className="window__content">
        {applicationScheme[window.application] || `Couldn't load application`}
      </div>
    </div>
  );
}

export { WindowFrame };
