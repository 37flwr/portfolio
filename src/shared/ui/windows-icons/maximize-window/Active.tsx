import { type ReactNode } from "react";
import maximizeButtonActive from "@shared/assets/icons/maximize-active.svg";

function MaximizeWindowActive({
  className,
}: {
  className?: string;
}): ReactNode {
  return <img src={maximizeButtonActive} className={className} alt="" />;
}

export { MaximizeWindowActive };
