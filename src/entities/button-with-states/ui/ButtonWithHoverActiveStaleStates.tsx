import { useState, type ReactNode } from "react";
import { IButtonWithHoverActiveStaleStates } from "../lib/ButtonWithStates.interface";

import "./styles.scss";

function ButtonWithHoverActiveStaleStates({
  active,
  hover,
  stale,
  onClick,
  className,
}: IButtonWithHoverActiveStaleStates): ReactNode {
  const [activeState, setActiveState] = useState<boolean>(false);
  const [hoverState, setHoverState] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => {
        setHoverState(false);
        setActiveState(false);
      }}
      onMouseDown={() => {
        setHoverState(false);
        setActiveState(true);
        onClick();
      }}
      onMouseUp={() => {
        setHoverState(true);
        setActiveState(false);
      }}
      className={`button-with-states ${className}`}
    >
      {activeState ? active : hoverState ? hover : stale}
    </button>
  );
}

export { ButtonWithHoverActiveStaleStates };
