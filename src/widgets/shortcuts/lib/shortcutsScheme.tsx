import { Microfrontends } from '../ui/pdfs/Microfrontends'
import { CV } from '../ui/pdfs/CV'
import { RickAstley } from '../ui/RickAstley'
import { Certificates } from '../ui/Certificates'
import { Cryptography } from '../ui/pdfs/Cryptography'
import Icons from '@shared/ui/windows-icons'
import { ShortcutIcons, Shortcuts } from '@shared/types/Shortcuts.interface'

export const shortcutScheme: Shortcuts = {
    none: (
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            _blank
        </div>
    ),
    'pdf/cv': <CV />,
    'pdf/microfrontends': <Microfrontends />,
    'pdf/cryptography': <Cryptography />,
    'meme/rickAstley': <RickAstley />,
    'folder/certificates': <Certificates />,
}

export const shortcutIconScheme: ShortcutIcons = {
    none: <Icons.Mimetype.Unknown />,
    pdf: <Icons.Mimetype.Pdf />,
    folder: <Icons.Folder.Base />,
    secret: <Icons.Mimetype.Secret />,
}
