import { type ReactNode } from 'react'
import dropdownIconActive from '@shared/assets/icons/dropdown-active.svg'

function DropdownActive({ className }: { className?: string }): ReactNode {
    return <img src={dropdownIconActive} className={className} alt="" />
}

export { DropdownActive }
