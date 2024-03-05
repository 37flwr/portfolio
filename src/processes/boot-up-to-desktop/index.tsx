import { type ReactNode } from 'react'
import { useApplicationStateStore } from '@app/store/applicationState'
import { BootUpPage, DesktopPage } from '@pages/index'

function BootUpToDesktopPage(): ReactNode {
    const showedBootUp = useApplicationStateStore(
        (store) => store.showedBootUpScreen
    )

    if (!showedBootUp) return <BootUpPage />

    return <DesktopPage />
}

export { BootUpToDesktopPage }
