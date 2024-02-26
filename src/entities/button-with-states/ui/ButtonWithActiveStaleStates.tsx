import { useState, type ReactNode } from "react";
import { IButtonWithActiveStaleStates } from "../lib/ButtonWithStates.interface";

import "./styles.scss";

function ButtonWithActiveStaleStates({
  active,
  stale,
  onClick,
  className,
}: IButtonWithActiveStaleStates): ReactNode {
  const [activeState, setActiveState] = useState<boolean>(false);
  return (
    <button
      onMouseLeave={() => {
        setActiveState(false);
      }}
      onMouseDown={() => {
        setActiveState(true);
        onClick();
      }}
      onMouseUp={() => {
        setActiveState(false);
      }}
      className={`button-with-states ${className}`}
    >
      {activeState ? active : stale}
    </button>
  );
}

export { ButtonWithActiveStaleStates };
