import { type ReactNode } from 'react'

import goBackwardIcon from '@shared/assets/icons/go-backward.png'

function GoBackwardIcon({ className }: { className?: string }): ReactNode {
    return <img src={goBackwardIcon} className={className} alt="" />
}

export { GoBackwardIcon }
