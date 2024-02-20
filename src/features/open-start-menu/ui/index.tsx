import { type ReactNode } from "react";
import { StartButton } from "@shared/ui/buttons";
import { useMenuState } from "../model/useMenuState";

function OpenStartMenuButton(): ReactNode {
  const [menuOpened, swicthMenuOpenedState] = useMenuState();

  return <StartButton active={menuOpened} onClick={swicthMenuOpenedState} />;
}

export { OpenStartMenuButton };
