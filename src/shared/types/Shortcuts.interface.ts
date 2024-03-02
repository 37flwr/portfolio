import { ReactNode } from 'react'

type ShortcutTitles =
    | 'none'
    | 'pdf/cv'
    | 'pdf/microfrontends'
    | 'pdf/cryptography'
    | 'meme/rickAstley'
    | 'folder/certificates'

export type Shortcuts = Record<ShortcutTitles, ReactNode>

type ShortcutIconKeys = 'none' | 'pdf' | 'secret' | 'folder'

export type ShortcutIcons = Record<ShortcutIconKeys, ReactNode>
