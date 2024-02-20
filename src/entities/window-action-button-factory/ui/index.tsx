import { type ReactNode } from "react";
import { ButtonWithHoverActiveStaleStates } from "@entities/button-with-states";
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
  [key: string]: (arg: () => void) => ReactNode;
}

const windowActionButtons: WindowActionButtonScheme = {
  close: (onClick): ReactNode => {
    return (
      <ButtonWithHoverActiveStaleStates
        onClick={onClick}
        active={<CloseWindowActive />}
        hover={<CloseWindowHover />}
        stale={<CloseWindowStale />}
      />
    );
  },
  maximize: (onClick): ReactNode => {
    return (
      <ButtonWithHoverActiveStaleStates
        onClick={onClick}
        active={<MaximizeWindowActive />}
        hover={<MaximizeWindowHover />}
        stale={<MaximizeWindowStale />}
      />
    );
  },
  minimize: (onClick): ReactNode => {
    return (
      <ButtonWithHoverActiveStaleStates
        onClick={onClick}
        active={<MinimizeWindowActive />}
        hover={<MinimizeWindowHover />}
        stale={<MinimizeWindowStale />}
      />
    );
  },
};

function WindowActionButtonFactory({
  type,
  onClick,
}: {
  type: string;
  onClick: () => void;
}): ReactNode {
  return (
    <div className="window-action-button">
      {windowActionButtons[type](onClick)}
    </div>
  );
}

export { WindowActionButtonFactory };
