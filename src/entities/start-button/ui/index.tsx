import { type ReactNode } from 'react'
import { ButtonWithHoverActiveStaleStates } from '@entities/button-with-states'
import Icons from '@shared/ui/windows-icons'
import './styles.scss'

function StartButtonWithHoverActiveStaleStates({
    onClick,
}: {
    onClick: () => void
}): ReactNode {
    return (
        <ButtonWithHoverActiveStaleStates
            className="start-button"
            onClick={onClick}
            active={<Icons.StartMenu.Active />}
            hover={<Icons.StartMenu.Hover />}
            stale={<Icons.StartMenu.Stale />}
        />
    )
}

export { StartButtonWithHoverActiveStaleStates }
