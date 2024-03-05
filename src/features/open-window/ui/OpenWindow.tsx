import { useState, type ReactNode } from 'react'
import { useDoubleTap } from 'use-double-tap'
import { openWindow } from '../model/openWindow'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import { ShortcutIcons, Shortcuts } from '@shared/types/Shortcuts.interface'
import { checkTouchDevice } from '@shared/lib/checkTouchDevice'
import './styles.scss'

interface IOpenWindow {
    iconTitle: keyof ShortcutIcons
    Icon: ReactNode
    title: string
    application: keyof Shortcuts
}

function OpenWindow(windowInfo: IOpenWindow): ReactNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [touchDevice, _] = useState(checkTouchDevice())
    const openWindowFn = () =>
        openWindow({
            icon: windowInfo.iconTitle,
            title: windowInfo.title,
            application: windowInfo.application,
        })

    const bindDoubleClick = useDoubleTap(() => openWindowFn())

    return (
        <button
            className="desktop-icon"
            {...(touchDevice ? { onClick: openWindowFn } : bindDoubleClick)}
        >
            <div className="desktop-icon__img">{windowInfo.Icon}</div>
            <NotoSansTextElement className="desktop-icon__title">
                {windowInfo.title}
            </NotoSansTextElement>
        </button>
    )
}

export { OpenWindow }
