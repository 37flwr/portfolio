import {
    type PropsWithChildren,
    type ReactNode,
    useRef,
    useCallback,
    useState,
} from 'react'
import Draggable, { type DraggableData } from 'react-draggable'
import { useShortcutsStore } from '@app/store/shortcuts'
import { changeShortcutPosition } from '../model/changeShortcutPosition'
import {
    SHORTCUT_GRID_SIZE_X,
    SHORTCUT_GRID_SIZE_Y,
} from '@shared/constants/numbers'
import './styles.scss'

type Props = { shortcutId: string } & PropsWithChildren

function DraggableShortcut({ shortcutId, children }: Props): ReactNode {
    const shortcuts = useShortcutsStore((state) => state.shortcuts)
    const shortcut = shortcuts.filter(
        (shortcut) => shortcut.shortcutId === shortcutId
    )[0]

    const [dragPosition, setDragPosition] = useState(shortcut.coordinates)
    const nodeRef = useRef(null)

    const resetDrag = useCallback(() => {
        setDragPosition(shortcut.coordinates)
    }, [setDragPosition, shortcut.coordinates])

    return (
        <Draggable
            nodeRef={nodeRef}
            axis="both"
            bounds="parent"
            handle=".shortcut-drag"
            position={dragPosition}
            grid={[SHORTCUT_GRID_SIZE_X, SHORTCUT_GRID_SIZE_Y]}
            scale={1}
            onDrag={(_, data: DraggableData) => {
                setDragPosition({ x: data.x, y: data.y })
            }}
            onStop={(_, data: DraggableData) => {
                const coordinates = { x: data.x, y: data.y }

                const shortcutWithSameCoordinatesExist = shortcuts.some(
                    (shortcut) =>
                        shortcut.coordinates.x === coordinates.x &&
                        shortcut.coordinates.y === coordinates.y
                )
                const cordinatesOutOfBounds =
                    data.x % 80 !== 0 || data.y % 80 !== 0

                if (shortcutWithSameCoordinatesExist || cordinatesOutOfBounds) {
                    resetDrag()
                } else {
                    changeShortcutPosition(shortcutId, coordinates)
                }
            }}
        >
            <div className="shortcut-drag" ref={nodeRef}>
                {children}
            </div>
        </Draggable>
    )
}

export { DraggableShortcut }
