import { type ReactNode } from "react";

function WindowCloseButton({ onClick }: { onClick: () => void }): ReactNode {
  return <button onClick={onClick} aria-label="Close"></button>;
}

export { WindowCloseButton };
