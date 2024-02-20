import { ReactNode, type PropsWithChildren } from "react";
import { TrebuchetTextElement } from "@shared/ui/text-elements";

import "./styles.scss";

interface IWindow extends PropsWithChildren {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  windowActionButtons: ReactNode;
}

function Window({ title, windowActionButtons, children }: IWindow): ReactNode {
  return (
    <div className="window" style={{ width: 640, height: 480 }}>
      <div className="window__title-bar">
        <TrebuchetTextElement className="window__title-bar__text">
          {title}
        </TrebuchetTextElement>
        <div className="window__title-bar__controls">{windowActionButtons}</div>
      </div>

      <div className="window__content">{children}</div>
    </div>
  );
}

export { Window };
