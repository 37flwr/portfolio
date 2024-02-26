import { type ReactNode } from 'react'
import startButtonHover from '@shared/assets/icons/close-button-hover.svg'

function CloseWindowHover({ className }: { className?: string }): ReactNode {
    return <img src={startButtonHover} className={className} alt="" />
}

export { CloseWindowHover }
