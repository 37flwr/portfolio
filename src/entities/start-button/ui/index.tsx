import { type ReactNode } from "react";
import { ButtonWithHoverActiveStaleStates } from "@entities/button-with-states";
import {
  StartMenuIconActive,
  StartMenuIconHover,
  StartMenuIconStale,
} from "@shared/ui/windows-icons";
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
      active={<StartMenuIconActive />}
      hover={<StartMenuIconHover />}
      stale={<StartMenuIconStale />}
    />
  );
}

export { StartButtonWithHoverActiveStaleStates };
