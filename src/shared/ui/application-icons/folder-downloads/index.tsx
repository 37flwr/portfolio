import { type ReactNode } from 'react'
import folderDownloadsIcon from '@shared/assets/icons/folder-downloads.png'

function FolderDownloadsIcon({ className }: { className?: string }): ReactNode {
    return <img src={folderDownloadsIcon} className={className} alt="" />
}

export { FolderDownloadsIcon as FolderDownloadsIcon }
