import { WindowFrame } from "@entities/window";
import { type ReactNode } from "react";

import {
  WindowCloseButton,
  WindowMaximizeButton,
  WindowMinimizeButton,
} from "@shared/ui/buttons";

function Window(): ReactNode {
  return (
    <WindowFrame
      title="test"
      windowActionButtons={[
        WindowMinimizeButton,
        WindowMaximizeButton,
        WindowCloseButton,
      ]}
    >
      1
    </WindowFrame>
  );
}

export default Window;
