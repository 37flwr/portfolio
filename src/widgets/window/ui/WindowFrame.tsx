import { useMemo, type ReactNode } from 'react'
import cn from 'classnames'
import {
    shortcutIconScheme,
    shortcutScheme,
} from '@widgets/shortcuts/lib/shortcutsScheme'
import { WindowActionButtons } from './WindowActionButtons'
import { useWindowContext } from '../model/windowContext'
import { TrebuchetTextElement } from '@shared/ui/text-elements'

import './styles.scss'
import { getRandomInt } from '@shared/lib/random'

function WindowFrame({
    className,
    generateWindowPosition,
    zCoordinate,
    topViewWindow,
}: {
    className?: string
    generateWindowPosition?: boolean
    zCoordinate?: number
    topViewWindow: boolean
}): ReactNode {
    const windowPosition = useMemo(
        () => ({ x: getRandomInt(0, 100), y: getRandomInt(0, 100) }),
        [generateWindowPosition]
    )

    const window = useWindowContext()
    return (
        <div
            className={cn('window', className)}
            style={{
                width: window.windowSize.w,
                height: window.windowSize.h,
                top: windowPosition?.y,
                left: windowPosition?.x,
                zIndex: zCoordinate,
                // transform: `translate(${position?.x}, ${position?.y})`,
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
