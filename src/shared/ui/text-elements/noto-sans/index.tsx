import { type ReactNode } from 'react'
import { TextElement } from '@shared/types/TextElement.interface'

import './styles.scss'

function NotoSansTextElement({ className, children }: TextElement): ReactNode {
    return <span className={`noto-sans-font ${className}`}>{children}</span>
}

export { NotoSansTextElement }
