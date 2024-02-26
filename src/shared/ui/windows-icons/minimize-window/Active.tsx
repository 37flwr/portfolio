import { type ReactNode } from 'react'
import minimizeButtonActive from '@shared/assets/icons/minimize-active.svg'

function MinimizeWindowActive({
    className,
}: {
    className?: string
}): ReactNode {
    return <img src={minimizeButtonActive} className={className} alt="" />
}

export { MinimizeWindowActive }
