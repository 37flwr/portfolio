import { type ReactNode } from "react";
import startButtonHover from "@shared/assets/icons/start-button-hover.svg";

function StartButtonHover({ className }: { className?: string }): ReactNode {
  return <img src={startButtonHover} className={className} alt="" />;
}

export { StartButtonHover };
