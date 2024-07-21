import { Microfrontends } from '../ui/pdfs/Microfrontends'
import { CV } from '../ui/pdfs/CV'
import { RickAstley } from '../ui/RickAstley'
import { Certificates } from '../ui/Certificates'
import { Cryptography } from '../ui/pdfs/Cryptography'
import { AdvancedEmailMarketing } from '../ui/pdfs/AdvancedEmailMarketing'
import { Deliverability } from '../ui/pdfs/Deliverability'
import Icons from '@shared/ui/windows-icons'
import { ShortcutIcons, Shortcuts } from '@shared/types/Shortcuts.interface'
import { DigitalMarketingEcommerce } from '../ui/pdfs/DigitalMarketingEcommerce'

export const shortcutScheme: Shortcuts = {
    none: (
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            _blank
        </div>
    ),
    'pdf/cv': <CV />,
    'pdf/microfrontends': <Microfrontends />,
    'pdf/cryptography': <Cryptography />,
    'pdf/advanced_email_marketing': <AdvancedEmailMarketing />,
    'pdf/deliverability': <Deliverability />,
    'pdf/digital_marketing_ecommerce': <DigitalMarketingEcommerce />,
    'meme/rickAstley': <RickAstley />,
    'folder/certificates': <Certificates />,
}

export const shortcutIconScheme: ShortcutIcons = {
    none: <Icons.Mimetype.Unknown />,
    pdf: <Icons.Mimetype.Pdf />,
    folder: <Icons.Folder.Base />,
    secret: <Icons.Mimetype.Secret />,
}
