import { ReactNode } from 'react'
import certificate from '@shared/assets/pdf/advanced_email_marketing.pdf'

function AdvancedEmailMarketing(): ReactNode {
    return (
        <iframe
            src={certificate}
            style={{ width: '100%', height: '100%' }}
        ></iframe>
    )
}

export { AdvancedEmailMarketing }
