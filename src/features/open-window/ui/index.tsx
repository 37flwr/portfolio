import { type ReactNode } from "react";
import { openWindow } from "../model/closeWindow";
import { TahomaTextElement } from "@shared/ui/text-elements";

import "./styles.scss";
import { NewWindow } from "@shared/types/Window.interface";

function OpenWindow(props: NewWindow): ReactNode {
  return (
    <button className="desktop-icon" onClick={() => openWindow(props)}>
      <div className="desktop-icon__img">{props.Icon}</div>
      <TahomaTextElement className="desktop-icon__title">
        {props.title}
      </TahomaTextElement>
    </button>
  );
}

export { OpenWindow };
