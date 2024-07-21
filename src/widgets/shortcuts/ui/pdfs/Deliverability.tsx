import { ReactNode } from 'react'
import certificate from '@shared/assets/pdf/deliverability.pdf'

function Deliverability(): ReactNode {
    return (
        <iframe
            src={certificate}
            style={{ width: '100%', height: '100%' }}
        ></iframe>
    )
}

export { Deliverability }
