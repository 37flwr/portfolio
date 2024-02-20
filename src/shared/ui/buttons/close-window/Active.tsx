import { type ReactNode } from "react";
import startButtonActive from "@shared/assets/icons/close-button-active.svg";

function CloseWindowActive(): ReactNode {
  return (
    <div className="window-action-button">
      <img src={startButtonActive} alt="" />
    </div>
  );
}

export { CloseWindowActive };
