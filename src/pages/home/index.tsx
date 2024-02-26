import { type ReactNode } from 'react'
import { shallow } from 'zustand/shallow'
import { useWindowsStore } from '@app/store/windows'
import { DesktopApplications } from '@widgets/applications'
import { Window } from '@widgets/window'
import { Taskbar } from '@widgets/taskbar'
import wallpaper from '@shared/assets/images/wallpaper.jpeg'

import './styles.scss'

function Home(): ReactNode {
    const visibleWindows = useWindowsStore(
        (store) =>
            store.windows.filter(
                (window) => window.windowState !== 'minimized'
            ),
        shallow
    )

    return (
        <>
            <div className="desktop">
                <DesktopApplications />
                {visibleWindows.map((window) => (
                    <Window key={window.windowId} windowId={window.windowId} />
                ))}
            </div>
            <Taskbar />
            <img className="wallpaper" src={wallpaper} alt="" />
        </>
    )
}

export { Home }
