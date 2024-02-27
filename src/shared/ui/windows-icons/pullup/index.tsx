import { type ReactNode } from 'react'

import pullupIcon from '@shared/assets/icons/pullup-icon.png'

function PullupIcon({ className }: { className?: string }): ReactNode {
    return <img src={pullupIcon} className={className} alt="" />
}

export { PullupIcon }
