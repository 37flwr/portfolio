import { useMemo, type ReactNode } from 'react'
import { useWindowsStore } from '@app/store/windows'
import { Shortcuts } from '@widgets/shortcuts'
import { Window } from '@widgets/window'
import { Taskbar } from '@widgets/taskbar'
import { StartMenu } from '@widgets/start-menu'
import wallpaper from '@shared/assets/images/wallpaper.jpeg'
import { findBiggestZIndex } from '@shared/lib/getWindowDetails'

import './styles.scss'
import { Each } from '@shared/ui/each'

function Desktop(): ReactNode {
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
                <Shortcuts />
                <Each
                    of={visibleWindows}
                    render={(window, index) => (
                        <Window
                            key={index}
                            windowId={window.windowId}
                            topViewWindow={topViewWindowId === window.windowId}
                        />
                    )}
                />
            </div>
            <StartMenu />
            <Taskbar />
            <img className="wallpaper" src={wallpaper} alt="" />
        </>
    )
}

export { Desktop }
