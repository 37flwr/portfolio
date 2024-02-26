import { type ReactNode } from "react";
import minimizeButtonStale from "@shared/assets/icons/minimize.svg";

function MinimizeWindowStale({ className }: { className?: string }): ReactNode {
  return <img src={minimizeButtonStale} className={className} alt="" />;
}

export { MinimizeWindowStale };
