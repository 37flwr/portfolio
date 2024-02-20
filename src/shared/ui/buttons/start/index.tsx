import { type ReactNode } from "react";
import startButton from "@shared/assets/images/start-button.png";
import startButtonActive from "@shared/assets/images/start-button-active.png";

import "./styles.scss";

interface IStartButton {
  active: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (arg0: any) => void;
}

function StartButton({ active, onClick }: IStartButton): ReactNode {
  return (
    <button onClick={onClick} className="start-button">
      <img
        style={{ width: "100%", height: "100%" }}
        src={active ? startButtonActive : startButton}
        alt=""
      />
    </button>
  );
}

export { StartButton };
