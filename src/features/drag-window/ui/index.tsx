import {
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import Draggable, { type DraggableData } from "react-draggable";
import { useWindowsStore } from "@app/store/windows";
import { changeWindowPosition } from "../model/changeWindowPosition";

interface IDraggableWindow extends PropsWithChildren {
  windowId: string;
}

function DraggableWindow({ windowId, children }: IDraggableWindow): ReactNode {
  const window = useWindowsStore((state) =>
    state.windows.filter((window) => window.windowId === windowId)
  )[0];

  const [dragging, setDragging] = useState<boolean>(false);
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="both"
      bounds="parent"
      handle=".window__title-bar"
      defaultPosition={window.coordinates}
      grid={[10, 10]}
      scale={1}
      onStart={() => {
        changeWindowPosition(windowId, window.coordinates);
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
        style={{ zIndex: dragging ? 9999 : window.coordinates.z }}
      >
        {children}
      </div>
    </Draggable>
  );
}

export { DraggableWindow };
