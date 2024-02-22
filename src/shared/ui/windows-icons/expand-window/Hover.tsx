import { type ReactNode } from "react";
import maximizeButtonHover from "@shared/assets/icons/maximize-hover.svg";

function ExpandWindowHover({ className }: { className?: string }): ReactNode {
  return <img src={maximizeButtonHover} className={className} alt="" />;
}

export { ExpandWindowHover };
