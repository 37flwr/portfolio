import { WindowFrame } from "@entities/window";
import { type ReactNode } from "react";

import { WindowActionButtonFactory } from "@entities/window-action-button-factory/ui";

function Window(): ReactNode {
  return (
    <WindowFrame
      title="test"
      windowActionButtons={[
        <WindowActionButtonFactory type="minimize" key="minimize" />,
        <WindowActionButtonFactory type="maximize" key="maximize" />,
        <WindowActionButtonFactory type="close" key="close" />,
      ]}
    >
      1
    </WindowFrame>
  );
}

export { Window };
