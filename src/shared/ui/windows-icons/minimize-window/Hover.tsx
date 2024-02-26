import { type ReactNode } from 'react'
import minimizeButtonHover from '@shared/assets/icons/minimize-hover.svg'

function MinimizeWindowHover({ className }: { className?: string }): ReactNode {
    return <img src={minimizeButtonHover} className={className} alt="" />
}

export { MinimizeWindowHover }
