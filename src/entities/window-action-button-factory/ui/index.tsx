import { type ReactNode } from 'react'
import { ButtonWithHoverActiveStaleStates as ButtonWithStates } from '@entities/button-with-states'
import {
    MinimizeWindowIconActive,
    MinimizeWindowIconHover,
    MinimizeWindowIconStale,
    CloseWindowIconActive,
    CloseWindowIconHover,
    CloseWindowIconStale,
    ExpandWindowIconActive,
    ExpandWindowIconHover,
    ExpandWindowIconStale,
    ShrinkWindowIconActive,
    ShrinkWindowIconHover,
    ShrinkWindowIconStale,
} from '@shared/ui/windows-icons'
import {
    WindowActionButtonFactory as IWindowActionButtonFactory,
    WindowActionButtonScheme,
} from '../lib/WindowActionButtons.interface'
import './styles.scss'

const windowActionButtons: WindowActionButtonScheme = {
    close: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<CloseWindowIconActive />}
                hover={<CloseWindowIconHover />}
                stale={<CloseWindowIconStale />}
            />
        )
    },
    shrink: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<ShrinkWindowIconActive />}
                hover={<ShrinkWindowIconHover />}
                stale={<ShrinkWindowIconStale />}
            />
        )
    },
    expand: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<ExpandWindowIconActive />}
                hover={<ExpandWindowIconHover />}
                stale={<ExpandWindowIconStale />}
            />
        )
    },
    minimize: (onClick) => {
        return (
            <ButtonWithStates
                onClick={onClick}
                active={<MinimizeWindowIconActive />}
                hover={<MinimizeWindowIconHover />}
                stale={<MinimizeWindowIconStale />}
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
