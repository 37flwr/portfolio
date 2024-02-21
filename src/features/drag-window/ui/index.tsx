import {
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { shallow } from "zustand/shallow";
import Draggable, { type DraggableData } from "react-draggable";
import { useWindowsStore } from "@app/store/windows";
import { changeWindowPosition } from "../model/changeWindowPosition";

interface IDraggableWindow extends PropsWithChildren {
  windowId: string;
}

function DraggableWindow({ windowId, children }: IDraggableWindow): ReactNode {
  const coordinates = useWindowsStore(
    (state) =>
      state.windows.filter((window) => window.windowId === windowId)[0]
        .coordinates,
    shallow
  );

  const [dragging, setDragging] = useState<boolean>(false);
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="both"
      bounds="parent"
      handle=".window__title-bar"
      defaultPosition={coordinates}
      grid={[10, 10]}
      scale={1}
      onStart={() => {
        changeWindowPosition(windowId, coordinates);
        setDragging(true);
      }}
      onStop={(_, data: DraggableData) => {
        const coordinates = { x: data.x, y: data.y };

        setDragging(false);
        changeWindowPosition(windowId, coordinates);
      }}
    >
      <div
        ref={nodeRef}
        className="window_wrapper"
        style={{ zIndex: dragging ? 9999 : coordinates.z }}
      >
        {children}
      </div>
    </Draggable>
  );
}

export { DraggableWindow };
