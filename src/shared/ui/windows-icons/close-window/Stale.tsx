import { type ReactNode } from 'react'
import startButtonStale from '@shared/assets/icons/close-button.svg'

function CloseWindowStale({ className }: { className?: string }): ReactNode {
    return <img src={startButtonStale} className={className} alt="" />
}

export { CloseWindowStale }
