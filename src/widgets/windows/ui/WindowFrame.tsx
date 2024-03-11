import { type ReactNode } from 'react'
import cn from 'classnames'
import {
    shortcutIconScheme,
    shortcutScheme,
} from '@widgets/shortcuts/lib/shortcutsScheme'
import { WindowActionButtons } from './WindowActionButtons'
import { useWindowContext } from '../model/windowContext'
import { TrebuchetTextElement } from '@shared/ui/text-elements'

import './styles.scss'

type Props = {
    className?: string
    generateWindowPosition?: boolean
    zCoordinate?: number
    topViewWindow: boolean
    expanded?: boolean
}
function WindowFrame({
    className,
    zCoordinate,
    topViewWindow,
    expanded,
}: Props): ReactNode {
    const window = useWindowContext()
    return (
        <div
            className={cn('window', expanded && 'expanded', className)}
            style={{
                width: window.windowSize.w,
                height: window.windowSize.h,
                zIndex: zCoordinate,
            }}
        >
            <div className="window__title-bar">
                {!topViewWindow && <div className="not-top-view-window" />}
                <div className="window__title-bar__title">
                    <div className="window__title-bar__title__icon">
                        {shortcutIconScheme[window.windowIcon]}
                    </div>
                    <TrebuchetTextElement className="window__title-bar__title__text">
                        {window.windowTitle}
                    </TrebuchetTextElement>
                </div>
                <div className="window__title-bar__controls">
                    <WindowActionButtons />
                </div>
            </div>

            <div className="window__content">
                {shortcutScheme[window.application] ||
                    `Couldn't load application`}
            </div>
        </div>
    )
}

export { WindowFrame }
