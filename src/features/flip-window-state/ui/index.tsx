import { type ReactNode } from "react";
import { flipWindowState } from "../model/flipWindowState";
import { FlipStateButton } from "./Button";
import {
  findBiggestZIndex,
  getWindow,
  getWindows,
} from "@shared/lib/getWindowDetails";
import "./styles.scss";

interface ICloseWindow {
  windowId: string;
}

function FlipWindowState({ windowId }: ICloseWindow): ReactNode {
  const window = getWindow(windowId);
  const windows = getWindows();
  const isWindowActive = findBiggestZIndex(windows) === window.coordinates.z;

  return (
    <button
      onClick={() => flipWindowState(windowId)}
      className={`taskbar-button_wrapper${
        isWindowActive ? "_active" : "_stale"
      }`}
    >
      <FlipStateButton isActive={isWindowActive} windowId={windowId} />
    </button>
  );
}

export { FlipWindowState };
