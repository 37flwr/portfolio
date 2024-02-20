import { type ReactNode } from "react";
import { TaskbarButton } from "./TaskbarButton.interface";

import "./styles.scss";

function Collapsed({ Icon, title }: TaskbarButton): ReactNode {
  return (
    <div className="taskbar-button taskbar-button_collapsed">
      <div className="taskbar-button__icon">{Icon}</div>
      <div className="taskbar-button__title">
        <span>{title}</span>
      </div>
    </div>
  );
}

export { Collapsed };
