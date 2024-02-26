import { type ReactNode } from 'react'
import { applicationIconScheme } from '@entities/applications'
import { openWindow } from '../model/openWindow'
import { TrebuchetTextElement } from '@shared/ui/text-elements'
import { OpenWindowDTO } from '@shared/types/Window.interface'

import './styles.scss'

function OpenWindow(windowInfo: OpenWindowDTO): ReactNode {
    return (
        <button
            className="desktop-icon"
            onDoubleClick={() => openWindow(windowInfo)}
        >
            <div className="desktop-icon__img">
                {applicationIconScheme[windowInfo.icon]}
            </div>
            <TrebuchetTextElement className="desktop-icon__title">
                {windowInfo.title}
            </TrebuchetTextElement>
        </button>
    )
}

export { OpenWindow }
