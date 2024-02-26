import { type ReactNode } from 'react'
import shrinkButtonStale from '@shared/assets/icons/shrink.svg'

function ShrinkWindowStale({ className }: { className?: string }): ReactNode {
    return <img src={shrinkButtonStale} className={className} alt="" />
}

export { ShrinkWindowStale }
