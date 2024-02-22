import { type ReactNode } from "react";
import maximizeButtonStale from "@shared/assets/icons/maximize.svg";

function ExpandWindowStale({ className }: { className?: string }): ReactNode {
  return <img src={maximizeButtonStale} className={className} alt="" />;
}

export { ExpandWindowStale };
