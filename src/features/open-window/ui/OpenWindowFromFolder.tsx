import { type ReactNode } from 'react'
import { useDoubleTap } from 'use-double-tap'
import { openWindow } from '../model/openWindow'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import { RenderOpenWindow } from '@shared/types/Window.interface'
import './styles.scss'

function OpenWindowFromFolder(windowInfo: RenderOpenWindow): ReactNode {
    const bindDoubleClick = useDoubleTap(() => openWindow({ ...windowInfo }))
    return (
        <button className="folder-icon" {...bindDoubleClick}>
            <div className="folder-icon__img">{windowInfo.Icon}</div>
            <NotoSansTextElement className="folder-icon__title">
                {windowInfo.title}
            </NotoSansTextElement>
        </button>
    )
}

export { OpenWindowFromFolder }
