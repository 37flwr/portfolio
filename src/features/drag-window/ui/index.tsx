import {
  useRef,
  type PropsWithChildren,
  type ReactNode,
  useState,
} from "react";
import Draggable, { type DraggableData } from "react-draggable";
import { saveWindowPosition } from "../model/saveWindowPosition";
import {
  getWindowCoordinates,
  getWindowIdx,
} from "@shared/lib/getWindowDetails";

interface IDraggableWindow extends PropsWithChildren {
  windowId: string;
}

function DraggableWindow({ windowId, children }: IDraggableWindow): ReactNode {
  const coordinates = getWindowCoordinates(windowId);
  const windowIdx = getWindowIdx(windowId);

  const [dragging, setDragging] = useState<boolean>(false);

  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="both"
      bounds="parent"
      handle=".handle"
      defaultPosition={coordinates}
      grid={[10, 10]}
      scale={1}
      onStart={() => {
        console.log(111);
        setDragging(true);
      }}
      // onDrag={this.handleDrag}
      onStop={(_, data: DraggableData) => {
        setDragging(false);
        const coordinates = { x: data.x, y: data.y };
        saveWindowPosition(windowId, coordinates);
      }}
    >
      <div
        ref={nodeRef}
        className="handle window_wrapper"
        style={{ zIndex: dragging ? 99 : windowIdx }}
      >
        {children}
      </div>
    </Draggable>
  );
}

export { DraggableWindow };
