import { ReactNode } from 'react'
import certificate from '@shared/assets/pdf/microfrontends.pdf'

function Microfrontends(): ReactNode {
    return (
        <iframe
            src={certificate}
            style={{ width: '100%', height: '100%' }}
        ></iframe>
    )
}

export { Microfrontends }
