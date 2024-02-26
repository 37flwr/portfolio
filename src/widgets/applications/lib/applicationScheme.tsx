import { CVApplication } from '../applications'
import { MimetypePdfIcon } from '@shared/ui/mimetypes/pdf'
import mimetypeUnknown from '@shared/assets/icons/mimetype-unknown.svg'
import {
    ApplicationIcons,
    Applications,
} from '@shared/types/Applications.interface'
import { RickAstley } from '../ui/applications/RickAstley'
import { MimetypeSecretIcon } from '@shared/ui/mimetypes/secret'
import { FolderIcon } from '@shared/ui/application-icons/folder'
import { Certificates } from '../ui/applications/Certificates'

export const applicationScheme: Applications = {
    none: (
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            _blank
        </div>
    ),
    cv: <CVApplication />,
    rickAstley: <RickAstley />,
    certificates: <Certificates />,
}

export const applicationIconScheme: ApplicationIcons = {
    none: <img src={mimetypeUnknown} alt="" />,
    pdf: <MimetypePdfIcon />,
    folder: <FolderIcon />,
    secret: <MimetypeSecretIcon />,
}