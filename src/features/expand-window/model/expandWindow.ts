import { useWindowsStore } from '@app/store/windows'

export const expandWindow = (windowId: string) => {
    const expandWindow = useWindowsStore.getState().expandWindow

    expandWindow(windowId)
}
