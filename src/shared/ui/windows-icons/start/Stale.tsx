import { type ReactNode } from 'react'
import startButtonStale from '@shared/assets/icons/start-button.svg'

function StartButtonStale({ className }: { className?: string }): ReactNode {
    return <img src={startButtonStale} className={className} alt="" />
}

export { StartButtonStale }
