import { useState, type ReactNode } from "react";

import "./styles.scss";

interface IButtonWithStates {
  active: ReactNode;
  hover: ReactNode;
  stale: ReactNode;
}

function ButtonWithStates({
  active,
  hover,
  stale,
}: IButtonWithStates): ReactNode {
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
      }}
      onMouseUp={() => {
        setHoverState(true);
        setActiveState(false);
      }}
      className="button-with-states"
      aria-label=""
    >
      {activeState ? active : hoverState ? hover : stale}
    </button>
  );
}

export { ButtonWithStates };
