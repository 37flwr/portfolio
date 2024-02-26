import { type ReactNode } from "react";
import startButtonActive from "@shared/assets/icons/start-button-active.svg";

function StartButtonActive({ className }: { className?: string }): ReactNode {
  return <img src={startButtonActive} className={className} alt="" />;
}

export { StartButtonActive };
