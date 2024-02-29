import { type ReactNode } from 'react'
import { ButtonWithHoverActiveStaleStates as ButtonWithStates } from '@entities/button-with-states'
import {
    WindowActionButtonFactory as IWindowActionButtonFactory,
    WindowActionButtonScheme,
} from '../lib/WindowActionButtons.interface'
import Icons from '@shared/ui/windows-icons'
import './styles.scss'

const windowActionButtons: WindowActionButtonScheme = {
    close: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<Icons.CloseWindow.Active />}
                hover={<Icons.CloseWindow.Hover />}
                stale={<Icons.CloseWindow.Stale />}
            />
        )
    },
    shrink: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<Icons.ShrinkWindow.Active />}
                hover={<Icons.ShrinkWindow.Hover />}
                stale={<Icons.ShrinkWindow.Stale />}
            />
        )
    },
    expand: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<Icons.ExpandWindow.Active />}
                hover={<Icons.ExpandWindow.Hover />}
                stale={<Icons.ExpandWindow.Stale />}
            />
        )
    },
    minimize: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<Icons.MinimizeWindow.Active />}
                hover={<Icons.MinimizeWindow.Hover />}
                stale={<Icons.MinimizeWindow.Stale />}
            />
        )
    },
}

function WindowActionButtonFactory({
    type,
    onClick,
}: IWindowActionButtonFactory): ReactNode {
    return (
        <div className="window-action-button">
            {windowActionButtons[type](onClick)}
        </div>
    )
}

export { WindowActionButtonFactory }
