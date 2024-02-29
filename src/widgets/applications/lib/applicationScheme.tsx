import { Microfrontends } from '../ui/applications/pdfs/Microfrontends'
import { CV } from '../ui/applications/pdfs/CV'
import { RickAstley } from '../ui/applications/RickAstley'
import { Certificates } from '../ui/applications/Certificates'
import Icons from '@shared/ui/windows-icons'
import {
    ApplicationIcons,
    Applications,
} from '@shared/types/Applications.interface'

export const applicationScheme: Applications = {
    none: (
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            _blank
        </div>
    ),
    'pdf/cv': <CV />,
    'pdf/microfrontends': <Microfrontends />,
    'meme/rickAstley': <RickAstley />,
    'folder/certificates': <Certificates />,
}

export const applicationIconScheme: ApplicationIcons = {
    none: <Icons.Mimetype.Unknown />,
    pdf: <Icons.Mimetype.Pdf />,
    folder: <Icons.Folder.Base />,
    secret: <Icons.Mimetype.Secret />,
}
