import { type ReactNode } from 'react'
import { TextElement } from '@shared/types/TextElement.interface'

import './styles.scss'

function TahomaTextElement({ className, children }: TextElement): ReactNode {
    return <span className={`tahoma-font ${className}`}>{children}</span>
}

export { TahomaTextElement }
