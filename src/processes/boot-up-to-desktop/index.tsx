import { type ReactNode } from 'react'
import { useBootUpStateStore } from '@app/store/bootUp'
import { BootUpPage, DesktopPage } from '@pages/index'

function BootUpToDesktopPage(): ReactNode {
    const showedBootUp = useBootUpStateStore(
        (store) => store.showedBootUpScreen
    )

    if (!showedBootUp) return <BootUpPage />

    return <DesktopPage />
}

export { BootUpToDesktopPage }
