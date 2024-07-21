import { ReactNode } from 'react'

type ShortcutTitles =
    | 'none'
    | 'pdf/cv'
    | 'pdf/microfrontends'
    | 'pdf/cryptography'
    | 'pdf/advanced_email_marketing'
    | 'pdf/deliverability'
    | 'pdf/digital_marketing_ecommerce'
    | 'meme/rickAstley'
    | 'folder/certificates'

export type Shortcuts = Record<ShortcutTitles, ReactNode>

type ShortcutIconKeys = 'none' | 'pdf' | 'secret' | 'folder'

export type ShortcutIcons = Record<ShortcutIconKeys, ReactNode>
