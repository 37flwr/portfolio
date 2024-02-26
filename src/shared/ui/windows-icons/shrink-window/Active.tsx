import { type ReactNode } from "react";
import shrinkButtonActive from "@shared/assets/icons/shrink-active.svg";

function ShrinkWindowActive({ className }: { className?: string }): ReactNode {
  return <img src={shrinkButtonActive} className={className} alt="" />;
}

export { ShrinkWindowActive };
