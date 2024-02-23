import { type ReactNode } from "react";
import { openWindow } from "../model/openWindow";
import { applicationIconScheme } from "@entities/applications";
import { TrebuchetTextElement } from "@shared/ui/text-elements";
import { NewWindow } from "@shared/types/Window.interface";

import "./styles.scss";

function OpenWindow(props: NewWindow): ReactNode {
  return (
    <button className="desktop-icon" onDoubleClick={() => openWindow(props)}>
      <div className="desktop-icon__img">
        {applicationIconScheme[props.icon]}
      </div>
      <TrebuchetTextElement className="desktop-icon__title">
        {props.title}
      </TrebuchetTextElement>
    </button>
  );
}

export { OpenWindow };
