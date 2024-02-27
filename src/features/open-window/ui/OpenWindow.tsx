import { type ReactNode } from 'react'
import { openWindow } from '../model/openWindow'
import { NotoSansTextElement } from '@shared/ui/text-elements'

import {
    ApplicationIcons,
    Applications,
} from '@shared/types/Applications.interface'
import './styles.scss'

interface IOpenWindow {
    iconTitle: keyof ApplicationIcons
    Icon: ReactNode
    title: string
    application: keyof Applications
}

function OpenWindow(windowInfo: IOpenWindow): ReactNode {
    return (
        <button
            className="desktop-icon"
            onDoubleClick={() =>
                openWindow({
                    icon: windowInfo.iconTitle,
                    title: windowInfo.title,
                    application: windowInfo.application,
                })
            }
        >
            <div className="desktop-icon__img">{windowInfo.Icon}</div>
            <NotoSansTextElement className="desktop-icon__title">
                {windowInfo.title}
            </NotoSansTextElement>
        </button>
    )
}

export { OpenWindow }
