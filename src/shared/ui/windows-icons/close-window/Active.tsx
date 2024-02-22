import { type ReactNode } from "react";
import closeButtonActive from "@shared/assets/icons/close-button-active.svg";

function CloseWindowActive(): ReactNode {
  return <img src={closeButtonActive} alt="" />;
}

export { CloseWindowActive };
