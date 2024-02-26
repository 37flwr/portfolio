import { type ReactNode } from 'react'
import closeButtonActive from '@shared/assets/icons/close-button-active.svg'

function CloseWindowActive({ className }: { className?: string }): ReactNode {
    return <img src={closeButtonActive} className={className} alt="" />
}

export { CloseWindowActive }
