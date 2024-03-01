import { ReactNode } from 'react'

type ApplicationTitles =
    | 'none'
    | 'pdf/cv'
    | 'pdf/microfrontends'
    | 'pdf/cryptography'
    | 'meme/rickAstley'
    | 'folder/certificates'

export type Applications = Record<ApplicationTitles, ReactNode>

type ApplicationIconKeys = 'none' | 'pdf' | 'secret' | 'folder'

export type ApplicationIcons = Record<ApplicationIconKeys, ReactNode>
