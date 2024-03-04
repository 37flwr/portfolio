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
    {
        icon: 'pdf',
        Icon: <Icons.Mimetype.Pdf />,
        title: 'Cryptography and Hashing',
        application: 'pdf/cryptography',
    },
    {
        icon: 'pdf',
        Icon: <Icons.Mimetype.Pdf />,
        title: 'Cryptography and Hashing',
        application: 'pdf/cryptography',
    },
]

function Certificates(): ReactNode {
    return (
        <FolderFrame Icon={<Icons.Folder.Base />} folderName="Certificates">
            {folderChildren.map((folderChild, idx) => (
                <OpenWindowFromFolderButton key={idx} {...folderChild} />
            ))}
        </FolderFrame>
    )
}

export { Certificates }
