import { type ReactNode } from 'react'
import cn from 'classnames'

import './styles.scss'

type Props = {
    onClick: () => void
    type: 'minimize' | 'expand' | 'shrink' | 'close'
}

const WindowActionButton = ({ onClick, type }: Props): ReactNode => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                'window-action-button',
                `window-action-button_${type}`
            )}
        ></button>
    )
}

export { WindowActionButton }
