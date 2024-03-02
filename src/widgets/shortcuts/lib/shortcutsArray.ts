import { OpenWindowDTO } from '@shared/types/Window.interface'

export const shortcutsArray: Array<OpenWindowDTO> = [
    {
        icon: 'pdf',
        title: 'My_CV.pdf',
        application: 'pdf/cv',
    },
    {
        icon: 'secret',
        title: 'My Ledger Mnemonic',
        application: 'meme/rickAstley',
    },
    {
        icon: 'folder',
        title: 'Certificates',
        application: 'folder/certificates',
    },
]
