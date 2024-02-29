import { ReactNode } from 'react'
import { OpenWindowFromFolderButton } from '@features/open-window'
import { FolderFrame } from '@entities/folder'
import { RenderOpenWindow } from '@shared/types/Window.interface'
import Icons from '@shared/ui/windows-icons'
import './styles.scss'

const folderChildren: Array<RenderOpenWindow> = [
    {
        icon: 'pdf',
        Icon: <Icons.Mimetype.Pdf />,
        title: 'Microfrontends with React',
        application: 'pdf/microfrontends',
    },
]

function Certificates(): ReactNode {
    return (
        <FolderFrame Icon={<Icons.Folder.Base />} folderName="Certificates">
            {folderChildren.map((folderChild) => (
                <OpenWindowFromFolderButton {...folderChild} />
            ))}
        </FolderFrame>
    )
}

export { Certificates }
