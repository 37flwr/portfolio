import { type ReactNode } from "react";
import maximizeButtonStale from "@shared/assets/icons/maximize.svg";

function MaximizeWindowStale({ className }: { className?: string }): ReactNode {
  return <img src={maximizeButtonStale} className={className} alt="" />;
}

export { MaximizeWindowStale };
