import { useWindowsStore } from '@app/store/windows'
import { OpenWindowDTO } from '@shared/types/Window.interface'

export const openWindow = (data: OpenWindowDTO) => {
    const openWindow = useWindowsStore.getState().openWindow

    openWindow(data)
}
