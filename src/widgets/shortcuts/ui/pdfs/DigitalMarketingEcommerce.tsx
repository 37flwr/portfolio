import { ReactNode } from 'react'
import certificate from '@shared/assets/pdf/digital_marketing_ecommerce.pdf'

function DigitalMarketingEcommerce(): ReactNode {
    return (
        <iframe
            src={certificate}
            style={{ width: '100%', height: '100%' }}
        ></iframe>
    )
}

export { DigitalMarketingEcommerce }
