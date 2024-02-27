import { ReactNode } from 'react'
import './styles.scss'
import { FolderFrame } from '@entities/folder'
import { FolderIcon } from '@shared/ui/application-icons/folder'

function Certificates(): ReactNode {
    return (
        <FolderFrame Icon={<FolderIcon />} folderName="Certificates">
            11
        </FolderFrame>
    )
}

export { Certificates }
