import { type ReactNode } from 'react'
import dropdownIconStale from '@shared/assets/icons/dropdown.svg'

function DropdownStale({ className }: { className?: string }): ReactNode {
    return <img src={dropdownIconStale} className={className} alt="" />
}

export { DropdownStale }
