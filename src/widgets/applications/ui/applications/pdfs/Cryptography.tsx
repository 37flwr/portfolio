import { ReactNode } from 'react'
import certificate from '@shared/assets/pdf/cryptography.pdf'

function Cryptography(): ReactNode {
    return (
        <iframe
            src={certificate}
            style={{ width: '100%', height: '100%' }}
        ></iframe>
    )
}

export { Cryptography }
