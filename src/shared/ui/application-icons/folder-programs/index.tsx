import { type ReactNode } from 'react'
import folderProgramsIcon from '@shared/assets/icons/folder-programs.png'

function FolderProgramsIcon({ className }: { className?: string }): ReactNode {
    return <img src={folderProgramsIcon} className={className} alt="" />
}

export { FolderProgramsIcon as FolderProgramsIcon }
