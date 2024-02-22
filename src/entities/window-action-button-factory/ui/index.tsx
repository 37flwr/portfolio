import { type ReactNode } from "react";
import { ButtonWithHoverActiveStaleStates } from "@entities/button-with-states";
import {
  MinimizeWindowIconActive,
  MinimizeWindowIconHover,
  MinimizeWindowIconStale,
  CloseWindowIconActive,
  CloseWindowIconHover,
  CloseWindowIconStale,
  MaximizeWindowIconActive,
  MaximizeWindowIconHover,
  MaximizeWindowIconStale,
} from "@shared/ui/windows-icons";

import "./styles.scss";

interface WindowActionButtonScheme {
  [key: string]: (arg: () => void) => ReactNode;
}

const windowActionButtons: WindowActionButtonScheme = {
  close: (onClick): ReactNode => {
    return (
      <ButtonWithHoverActiveStaleStates
        onClick={onClick}
        active={<CloseWindowIconActive />}
        hover={<CloseWindowIconHover />}
        stale={<CloseWindowIconStale />}
      />
    );
  },
  maximize: (onClick): ReactNode => {
    return (
      <ButtonWithHoverActiveStaleStates
        onClick={onClick}
        active={<MaximizeWindowIconActive />}
        hover={<MaximizeWindowIconHover />}
        stale={<MaximizeWindowIconStale />}
      />
    );
  },
  minimize: (onClick): ReactNode => {
    return (
      <ButtonWithHoverActiveStaleStates
        onClick={onClick}
        active={<MinimizeWindowIconActive />}
        hover={<MinimizeWindowIconHover />}
        stale={<MinimizeWindowIconStale />}
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
