import { type ReactNode } from "react";
import { shallow } from "zustand/shallow";
import { useWindowsStore } from "@app/store/windows";
import { Window } from "@widgets/window";
import { Taskbar } from "@widgets/taskbar";
import wallpaper from "@shared/assets/images/wallpaper.jpeg";

import "./styles.scss";

function Home(): ReactNode {
  const visibleWindows = useWindowsStore(
    (store) =>
      store.windows.filter((window) => window.windowState !== "minimized"),
    shallow
  );

  return (
    <div className="page">
      {visibleWindows.map((window) => (
        <Window key={window.windowId} windowId={window.windowId} />
      ))}
      <Taskbar />
      <img className="wallpaper" src={wallpaper} alt="" />
    </div>
  );
}

export { Home };
