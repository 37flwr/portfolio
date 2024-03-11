import { useMemo, type ReactNode } from 'react'
import { useWindowsStore } from '@app/store/windows'
import { Window } from './Window'
import { findBiggestZIndex } from '@shared/lib/getWindowDetails'
import { Each } from '@shared/ui/each'

function Windows(): ReactNode {
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
    )
}

export { Windows }
