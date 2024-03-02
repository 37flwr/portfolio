import { useMemo, type ReactNode } from 'react'
import { useWindowsStore } from '@app/store/windows'
import { DesktopApplications } from '@widgets/applications'
import { Window } from '@widgets/window'
import { Taskbar } from '@widgets/taskbar'
import wallpaper from '@shared/assets/images/wallpaper.jpeg'
import { findBiggestZIndex } from '@shared/lib/getWindowDetails'

import './styles.scss'

function Home(): ReactNode {
    const visibleWindows = useWindowsStore((store) =>
        store.windows.filter((window) => window.windowState !== 'minimized')
    )

    const topViewWindowId = useMemo(
        () =>
            visibleWindows.filter(
                (window) =>
                    window.coordinates.z === findBiggestZIndex(visibleWindows)
            )[0]?.windowId,
        [visibleWindows]
    )

    return (
        <>
            <div className="desktop">
                <DesktopApplications />
                {visibleWindows.map((window) => (
                    <Window
                        key={window.windowId}
                        windowId={window.windowId}
                        topViewWindow={topViewWindowId === window.windowId}
                    />
                ))}
            </div>
            <Taskbar />
            <img className="wallpaper" src={wallpaper} alt="" />
        </>
    )
}

export { Home }
