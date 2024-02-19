import { type ReactNode } from "react";

function WindowMaximizeButton({ onClick }: { onClick: () => void }): ReactNode {
  return <button onClick={onClick} aria-label="Maximize"></button>;
}

export { WindowMaximizeButton };
