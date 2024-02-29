import { type ReactNode } from 'react'
import { StartButton } from '@entities/start-button'
import Icons from '@shared/ui/windows-icons'
import { useMenuState } from '../model/useMenuState'

function OpenStartMenuButton(): ReactNode {
    const [menuOpened, switchMenuOpenedState] = useMenuState()

    if (menuOpened) {
        return (
            <button className="start-button" onClick={switchMenuOpenedState}>
                <Icons.StartMenu.Active />
            </button>
        )
    }

    return <StartButton onClick={switchMenuOpenedState} />
}

export { OpenStartMenuButton }
