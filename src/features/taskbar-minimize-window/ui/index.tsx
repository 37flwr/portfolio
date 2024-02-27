import { type ReactNode } from 'react'
import { minimizeWindow } from '../model/minimizeWindow'
import { TaskbarButtonActive } from '@shared/ui/windows-buttons'
import { useWindowsStore } from '@app/store/windows'
import { shallow } from 'zustand/shallow'
import { TaskbarButton } from '@entities/taskbar-button'
import { applicationIconScheme } from '@widgets/applications/lib/applicationScheme'
import { WindowDTO } from '@shared/types/Window.interface'

function MinimizeWindow({ windowId }: WindowDTO): ReactNode {
    const window = useWindowsStore(
        (store) =>
            store.windows.filter((window) => window.windowId === windowId)[0],
        shallow
    )
    return (
        <TaskbarButton onClick={() => minimizeWindow(windowId)}>
            <TaskbarButtonActive
                Icon={applicationIconScheme[window.windowIcon]}
                title={window.windowTitle}
            />
        </TaskbarButton>
    )
}

export { MinimizeWindow }
