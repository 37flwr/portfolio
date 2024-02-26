import { type ReactNode } from 'react'
import folderIcon from '@shared/assets/icons/folder.svg'

function FolderIcon({ className }: { className?: string }): ReactNode {
    return <img src={folderIcon} className={className} alt="" />
}

export { FolderIcon as FolderIcon }
