import { type ReactNode } from 'react'
import cn from 'classnames'
import {
    applicationIconScheme,
    applicationScheme,
} from '@widgets/applications/lib/applicationScheme'
import { WindowActionButtons } from './WindowActionButtons'
import { useWindowContext } from '../model/windowContext'
import { TrebuchetTextElement } from '@shared/ui/text-elements'

import './styles.scss'

function WindowFrame({ className }: { className?: string }): ReactNode {
    const window = useWindowContext()
    return (
        <div
            className={cn('window', className)}
            style={{ width: window.windowSize.w, height: window.windowSize.h }}
        >
            <div className="window__title-bar">
                <div className="window__title-bar__title">
                    <div className="window__title-bar__title__icon">
                        {applicationIconScheme[window.windowIcon]}
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
                {applicationScheme[window.application] ||
                    `Couldn't load application`}
            </div>
        </div>
    )
}

export { WindowFrame }
