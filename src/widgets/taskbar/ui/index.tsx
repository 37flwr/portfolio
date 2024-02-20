import { type ReactNode } from "react";
import { OpenStartMenuButton } from "@features/open-start-menu";

import "./styles.scss";

function Taskbar(): ReactNode {
  return (
    <div className="taskbar">
      <OpenStartMenuButton />
    </div>
  );
}

export { Taskbar };
