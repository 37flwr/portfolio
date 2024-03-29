import { type ReactNode } from 'react'
import { useWindowsStore } from '@app/store/windows'
import { OpenStartMenuButton } from '@features/open-start-menu'
import { SystemTray } from '@entities/system-tray'
import { TaskbarButton } from './TaskbarButton'

import './styles.scss'
import { Each } from '@shared/ui/each'

function Taskbar(): ReactNode {
    const windows = useWindowsStore((store) => store.windows)

    return (
        <div className="taskbar">
            <div className="taskbar__start-button">
                <OpenStartMenuButton />
            </div>
            <div className="taskbar__buttons">
                <Each
                    of={windows}
                    render={(window, index) => (
                        <TaskbarButton key={index} windowId={window.windowId} />
                    )}
                />
            </div>
            <div className="taskbar__system-tray">
                <SystemTray />
            </div>
        </div>
    )
}

export { Taskbar }
