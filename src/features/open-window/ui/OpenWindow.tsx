import { type ReactNode } from 'react'
import { useDoubleTap } from 'use-double-tap'
import { openWindow } from '../model/openWindow'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import { ShortcutIcons, Shortcuts } from '@shared/types/Shortcuts.interface'
import './styles.scss'

interface IOpenWindow {
    iconTitle: keyof ShortcutIcons
    Icon: ReactNode
    title: string
    application: keyof Shortcuts
}

function OpenWindow(windowInfo: IOpenWindow): ReactNode {
    const bindDoubleClick = useDoubleTap(() =>
        openWindow({
            icon: windowInfo.iconTitle,
            title: windowInfo.title,
            application: windowInfo.application,
        })
    )
    return (
        <button className="desktop-icon" {...bindDoubleClick}>
            <div className="desktop-icon__img">{windowInfo.Icon}</div>
            <NotoSansTextElement className="desktop-icon__title">
                {windowInfo.title}
            </NotoSansTextElement>
        </button>
    )
}

export { OpenWindow }
