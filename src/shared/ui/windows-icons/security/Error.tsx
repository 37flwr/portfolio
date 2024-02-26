import { type ReactNode } from 'react'
import securityIconError from '@shared/assets/icons/security-error.svg'

function SecurityError({ className }: { className?: string }): ReactNode {
    return <img src={securityIconError} className={className} alt="" />
}

export { SecurityError }
