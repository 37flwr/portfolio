import { useWindowsStore } from '@app/store/windows'

export const minimizeWindow = (windowId: string) => {
    const bringWindowToTheFront =
        useWindowsStore.getState().bringWindowToTheFront

    bringWindowToTheFront(windowId)
}
