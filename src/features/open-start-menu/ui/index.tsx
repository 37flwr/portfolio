import { type ReactNode } from "react";
import { StartButton } from "@entities/start-button";
import { StartButtonActive } from "@shared/ui/buttons";
import { useMenuState } from "../model/useMenuState";

function OpenStartMenuButton(): ReactNode {
  const [menuOpened, switchMenuOpenedState] = useMenuState();

  if (menuOpened) {
    return (
      <button className="start-button" onClick={switchMenuOpenedState}>
        <StartButtonActive />
      </button>
    );
  }

  return <StartButton onClick={switchMenuOpenedState} />;
}

export { OpenStartMenuButton };
