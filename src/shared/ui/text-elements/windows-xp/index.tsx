import { type PropsWithChildren, type ReactNode } from "react";

import "./styles.scss";

interface IWindowsXPTextElement extends PropsWithChildren {
  className?: string;
}

function WindowsXPTextElement({
  className,
  children,
}: IWindowsXPTextElement): ReactNode {
  return <span className={`windows-xp-font ${className}`}>{children}</span>;
}

export { WindowsXPTextElement };
