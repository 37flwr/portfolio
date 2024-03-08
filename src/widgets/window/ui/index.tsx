import { useState, type ReactNode } from 'react'
import { shallow } from 'zustand/shallow'
import { useWindowsStore } from '@app/store/windows'
import { DraggableWindow } from '@features/drag-window'
import { WindowFrame } from './WindowFrame'
import { WindowContext } from '../model/windowContext'
import { WindowDTO } from '@shared/types/Window.interface'
import { checkTouchDevice } from '@shared/lib/checkTouchDevice'

interface Props extends WindowDTO {
    topViewWindow: boolean
}

function Window({ windowId, topViewWindow }: Props): ReactNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [touchDevice, _] = useState(checkTouchDevice())
    const window = useWindowsStore(
        (store) =>
            store.windows.filter((window) => window.windowId === windowId),
        shallow
    )[0]

    if (window.isExpanded) {
        return (
            <WindowContext.Provider value={window}>
                <WindowFrame expanded={true} topViewWindow={topViewWindow} />
            </WindowContext.Provider>
        )
    }

    if (touchDevice) {
        return (
            <WindowContext.Provider value={window}>
                <WindowFrame
                    topViewWindow={topViewWindow}
                    zCoordinate={window.coordinates.z}
                />
            </WindowContext.Provider>
        )
    }

    return (
        <WindowContext.Provider value={window}>
            <DraggableWindow windowId={windowId}>
                <WindowFrame topViewWindow={topViewWindow} />
            </DraggableWindow>
        </WindowContext.Provider>
    )
}

export { Window }
