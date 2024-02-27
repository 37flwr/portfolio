import { ReactNode } from 'react'
import { OpenWindowFromFolderButton } from '@features/open-window'
import { FolderFrame } from '@entities/folder'
import { FolderIcon } from '@shared/ui/application-icons/folder'
import { RenderOpenWindow } from '@shared/types/Window.interface'
import { MimetypePdfIcon } from '@shared/ui/mimetypes/pdf'
import './styles.scss'

const folderChildren: Array<RenderOpenWindow> = [
    {
        icon: 'pdf',
        Icon: <MimetypePdfIcon />,
        title: 'Microfrontends with React',
        application: 'pdf/microfrontends',
    },
]

function Certificates(): ReactNode {
    return (
        <FolderFrame Icon={<FolderIcon />} folderName="Certificates">
            {folderChildren.map((folderChild) => (
                <OpenWindowFromFolderButton {...folderChild} />
            ))}
        </FolderFrame>
    )
}

export { Certificates }
