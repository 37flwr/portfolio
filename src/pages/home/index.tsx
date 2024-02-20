import { type ReactNode } from "react";
import { Window } from "@widgets/window";
import { Taskbar } from "@widgets/taskbar";
import wallpaper from "@shared/assets/images/wallpaper.jpeg";

import "./styles.scss";

function Home(): ReactNode {
  return (
    <div>
      <Window />
      <Taskbar />
      <img className="wallpaper" src={wallpaper} alt="" />
    </div>
  );
}

export { Home };
