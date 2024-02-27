import { type ReactNode } from 'react'
import dropdownIconHover from '@shared/assets/icons/dropdown-hover.svg'

function DropdownHover({ className }: { className?: string }): ReactNode {
    return <img src={dropdownIconHover} className={className} alt="" />
}

export { DropdownHover }
