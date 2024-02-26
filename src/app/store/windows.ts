import { createWithEqualityFn } from 'zustand/traditional'
import { persist } from 'zustand/middleware'
import { v4 as uuid } from 'uuid'
import { OpenWindowDTO, Window } from '@shared/types/Window.interface'
import { findBiggestZIndex } from '@shared/lib/getWindowDetails'

interface WindowsStore {
    windows: Array<Window>
    openWindow: (newWindowInfo: OpenWindowDTO) => void
    closeWindow: (windowId: string) => void
    minimizeWindow: (windowId: string) => void
    restoreWindow: (windowId: string) => void
    bringWindowToTheFront: (windowId: string) => void
    changeWindowPosition: (
        windowId: string,
        { x, y }: { x: number; y: number }
    ) => void
    expandWindow: (windowId: string) => void
    shrinkWindow: (windowId: string) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): WindowsStore => ({
    windows: [],
    openWindow: (newWindowInfo) => {
        set((state: WindowsStore) => {
            const newWindow: Window = {
                windowId: uuid(),
                windowTitle: newWindowInfo.title,
                windowState: 'opened',
                application: newWindowInfo.application,
                windowSize: { w: 640, h: 400 },
                isExpanded: false,
                windowIcon: newWindowInfo.icon,
                coordinates: {
                    x: 100,
                    y: 100,
                    z: findBiggestZIndex(state.windows) + 1,
                },
            }

            return { windows: [...state.windows, newWindow] }
        })
    },
    closeWindow: (windowId) => {
        set((state: WindowsStore) => ({
            windows: [
                ...state.windows.filter(
                    (window) => window.windowId !== windowId
                ),
            ],
        }))
    },
    bringWindowToTheFront: (windowId) => {
        set((state: WindowsStore) => {
            const modifiedWindowIdx = state.windows.findIndex(
                (window) => window.windowId === windowId
            )
            const biggestZIndex = findBiggestZIndex(state.windows)

            const newWindows = [...state.windows]
            newWindows[modifiedWindowIdx].coordinates.z = biggestZIndex + 1

            return {
                windows: [...newWindows],
            }
        })
    },
    minimizeWindow: (windowId) => {
        set((state: WindowsStore) => {
            const modifiedWindowIdx = state.windows.findIndex(
                (window) => window.windowId === windowId
            )

            const newWindows = [...state.windows]
            newWindows[modifiedWindowIdx].coordinates.z = 0
            newWindows[modifiedWindowIdx].windowState = 'minimized'

            return {
                windows: [...newWindows],
            }
        })
    },
    restoreWindow: (windowId) => {
        set((state: WindowsStore) => {
            const modifiedWindowIdx = state.windows.findIndex(
                (window) => window.windowId === windowId
            )

            const newWindows = [...state.windows]
            newWindows[modifiedWindowIdx].coordinates.z =
                findBiggestZIndex(state.windows) + 1
            newWindows[modifiedWindowIdx].windowState = 'opened'

            return {
                windows: [...newWindows],
            }
        })
    },
    changeWindowPosition: (windowId, coordinates) => {
        set((state: WindowsStore) => {
            const highestZIndex = findBiggestZIndex(state.windows)

            const modifiedWindowIdx = state.windows.findIndex(
                (window) => window.windowId === windowId
            )

            const newWindows = [...state.windows]
            newWindows[modifiedWindowIdx].coordinates = {
                ...coordinates,
                z:
                    // If window's z index is the highest - dont change it
                    state.windows[modifiedWindowIdx].coordinates.z ===
                    highestZIndex
                        ? highestZIndex
                        : highestZIndex + 1,
            }

            return {
                windows: [...newWindows],
            }
        })
    },
    expandWindow: (windowId) => {
        set((state: WindowsStore) => {
            const modifiedWindowIdx = state.windows.findIndex(
                (window) => window.windowId === windowId
            )
            const newWindows = [...state.windows]
            newWindows[modifiedWindowIdx].isExpanded = true
            newWindows[modifiedWindowIdx].coordinates.z =
                findBiggestZIndex(state.windows) + 1

            return {
                windows: [...newWindows],
            }
        })
    },
    shrinkWindow: (windowId) => {
        set((state: WindowsStore) => {
            const modifiedWindowIdx = state.windows.findIndex(
                (window) => window.windowId === windowId
            )
            const newWindows = [...state.windows]
            newWindows[modifiedWindowIdx].isExpanded = false

            return {
                windows: [...newWindows],
            }
        })
    },
})

export const useWindowsStore = createWithEqualityFn(
    persist(store, { name: 'windows' })
)
