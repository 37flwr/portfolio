import { type ReactNode } from "react";

function WindowMinimizeButton({ onClick }: { onClick: () => void }): ReactNode {
  return <button onClick={onClick} aria-label="Minimize"></button>;
}

export { WindowMinimizeButton };
