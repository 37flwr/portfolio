import { type ReactNode } from 'react'

import goForwardIcon from '@shared/assets/icons/go-forward.png'

function GoForwardIcon({ className }: { className?: string }): ReactNode {
    return <img src={goForwardIcon} className={className} alt="" />
}

export { GoForwardIcon }
