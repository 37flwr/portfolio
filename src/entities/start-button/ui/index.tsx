import { type ReactNode } from "react";
import { ButtonWithHoverActiveStaleStates } from "@entities/button-with-states";
import {
  StartButtonActive,
  StartButtonHover,
  StartButtonStale,
} from "@shared/ui/buttons/start";
import "./styles.scss";

function StartButtonWithHoverActiveStaleStates({
  onClick,
}: {
  onClick: () => void;
}): ReactNode {
  return (
    <ButtonWithHoverActiveStaleStates
      className="start-button"
      onClick={onClick}
      active={<StartButtonActive />}
      hover={<StartButtonHover />}
      stale={<StartButtonStale />}
    />
  );
}

export { StartButtonWithHoverActiveStaleStates };
