import { type ReactNode } from 'react'
import { useWindowsStore } from '@app/store/windows'
import { DraggableWindow } from '@features/drag-window'
import { WindowFrame } from './WindowFrame'
import { WindowDTO } from '@shared/types/Window.interface'
import { WindowContext } from '../model/windowContext'
import { shallow } from 'zustand/shallow'

interface Props extends WindowDTO {
    topViewWindow: boolean
}

function Window({ windowId, topViewWindow }: Props): ReactNode {
    const window = useWindowsStore(
        (store) =>
            store.windows.filter((window) => window.windowId === windowId),
        shallow
    )[0]

    if (window.isExpanded) {
        return (
            <WindowContext.Provider value={window}>
                <WindowFrame
                    className="expanded"
                    topViewWindow={topViewWindow}
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
