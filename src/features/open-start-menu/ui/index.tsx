import { type ReactNode } from 'react'
import { useMenuState } from '../model/useMenuState'
import Icons from '@shared/ui/windows-icons'

function OpenStartMenuButton(): ReactNode {
    const [menuOpened, switchMenuOpenedState] = useMenuState()

    return (
        <button
            onClick={(e) => {
                if (!menuOpened) {
                    e.stopPropagation()
                    switchMenuOpenedState()
                }
            }}
        >
            <Icons.StartMenu.Stale />
        </button>
    )
}

export { OpenStartMenuButton }
