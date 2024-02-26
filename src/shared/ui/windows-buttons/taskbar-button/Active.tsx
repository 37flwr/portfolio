import { type ReactNode } from 'react'
import { TaskbarButton } from './TaskbarButton.interface'

import './styles.scss'

function Active({ Icon, title }: TaskbarButton): ReactNode {
    return (
        <div className="taskbar-button taskbar-button_active">
            <div className="taskbar-button__icon">{Icon}</div>
            <div className="taskbar-button__title">
                <span>{title}</span>
            </div>
        </div>
    )
}

export { Active }
