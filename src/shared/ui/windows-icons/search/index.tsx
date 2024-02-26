import { type ReactNode } from 'react'
import searchIcon from '@shared/assets/icons/search.png'

function SearchIcon({ className }: { className?: string }): ReactNode {
    return <img src={searchIcon} className={className} alt="" />
}

export { SearchIcon as SearchIcon }
