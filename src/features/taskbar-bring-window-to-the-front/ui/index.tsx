import { type ReactNode } from 'react'
import { shallow } from 'zustand/shallow'
import { useWindowsStore } from '@app/store/windows'
import { shortcutIconScheme } from '@widgets/shortcuts/lib/shortcutsScheme'
import { TaskbarButton } from '@entities/taskbar-button'
import { minimizeWindow } from '../model/bringWindowToTheFront'
import { TaskbarButtonStale } from '@shared/ui/windows-buttons'
import { WindowDTO } from '@shared/types/Window.interface'

function BringWindowToTheFront({ windowId }: WindowDTO): ReactNode {
    const window = useWindowsStore(
        (store) =>
            store.windows.filter((window) => window.windowId === windowId)[0],
        shallow
    )
    return (
        <TaskbarButton onClick={() => minimizeWindow(windowId)}>
            <TaskbarButtonStale
                Icon={shortcutIconScheme[window.windowIcon]}
                title={window.windowTitle}
            />
        </TaskbarButton>
    )
}

export { BringWindowToTheFront }
