import { type PropsWithChildren, type ReactNode } from "react";
import "./styles.scss";

interface ITaskbarButton extends PropsWithChildren {
  onClick: () => void;
}

function TaskbarButton({ onClick, children }: ITaskbarButton): ReactNode {
  return (
    <button onClick={onClick} className="taskbar-button_wrapper">
      {children}
    </button>
  );
}

export { TaskbarButton };
