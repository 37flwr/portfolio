import { ReactNode } from 'react'
import { OpenWindowFromFolderButton } from '@features/open-window'
import { FolderFrame } from '@entities/folder'
import { RenderOpenWindow } from '@shared/types/Window.interface'
import Icons from '@shared/ui/windows-icons'
import './styles.scss'
import { Each } from '@shared/ui/each'

const folderChildren: Array<RenderOpenWindow> = [
    // {
    //     icon: 'pdf',
    //     Icon: <Icons.Mimetype.Pdf />,
    //     title: 'Microfrontends with React',
    //     application: 'pdf/microfrontends',
    // },
    // {
    //     icon: 'pdf',
    //     Icon: <Icons.Mimetype.Pdf />,
    //     title: 'Cryptography and Hashing',
    //     application: 'pdf/cryptography',
    // },
    // {
    //     icon: 'pdf',
    //     Icon: <Icons.Mimetype.Pdf />,
    //     title: 'Cryptography and Hashing',
    //     application: 'pdf/cryptography',
    // },
    {
        icon: 'pdf',
        Icon: <Icons.Mimetype.Pdf />,
        title: 'Advanced Email Marketing',
        application: 'pdf/advanced_email_marketing',
    },
    {
        icon: 'pdf',
        Icon: <Icons.Mimetype.Pdf />,
        title: 'Delivarability',
        application: 'pdf/deliverability',
    },
    {
        icon: 'pdf',
        Icon: <Icons.Mimetype.Pdf />,
        title: 'Digital Marketing & E-commerce',
        application: 'pdf/digital_marketing_ecommerce',
    },
]

function Certificates(): ReactNode {
    return (
        <FolderFrame Icon={<Icons.Folder.Base />} folderName="Certificates">
            <Each
                of={folderChildren}
                render={(folderChild, index) => (
                    <OpenWindowFromFolderButton key={index} {...folderChild} />
                )}
            />
        </FolderFrame>
    )
}

export { Certificates }
