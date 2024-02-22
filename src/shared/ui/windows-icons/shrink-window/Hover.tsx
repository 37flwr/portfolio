import { type ReactNode } from "react";
import shrinkButtonHover from "@shared/assets/icons/shrink-hover.svg";

function ShrinkWindowHover({ className }: { className?: string }): ReactNode {
  return <img src={shrinkButtonHover} className={className} alt="" />;
}

export { ShrinkWindowHover };
