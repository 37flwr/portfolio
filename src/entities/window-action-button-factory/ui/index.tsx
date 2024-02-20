import { type ReactNode } from "react";
import { ButtonWithStates } from "@entities/button-with-states";
import {
  MinimizeWindowActive,
  MinimizeWindowHover,
  MinimizeWindowStale,
  CloseWindowActive,
  CloseWindowHover,
  CloseWindowStale,
  MaximizeWindowActive,
  MaximizeWindowHover,
  MaximizeWindowStale,
} from "@shared/ui/buttons";

import "./styles.scss";

interface WindowActionButtonScheme {
  [key: string]: ReactNode;
}

const windowActionButtons: WindowActionButtonScheme = {
  close: (
    <ButtonWithStates
      active={<CloseWindowActive />}
      hover={<CloseWindowHover />}
      stale={<CloseWindowStale />}
    />
  ),
  maximize: (
    <ButtonWithStates
      active={<MaximizeWindowActive />}
      hover={<MaximizeWindowHover />}
      stale={<MaximizeWindowStale />}
    />
  ),
  minimize: (
    <ButtonWithStates
      active={<MinimizeWindowActive />}
      hover={<MinimizeWindowHover />}
      stale={<MinimizeWindowStale />}
    />
  ),
};

function WindowActionButtonFactory({ type }: { type: string }): ReactNode {
  return (
    <div className="window-action-button">{windowActionButtons[type]}</div>
  );
}

export { WindowActionButtonFactory };
