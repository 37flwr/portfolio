import { type ReactNode } from "react";
import startButtonStale from "@shared/assets/icons/close-button.svg";

function CloseWindowStale(): ReactNode {
  return (
    <div className="window-action-button">
      <img src={startButtonStale} alt="" />
    </div>
  );
}

export { CloseWindowStale };
