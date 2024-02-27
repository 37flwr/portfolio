import { type ReactNode } from 'react'

import dialogOkIcon from '@shared/assets/icons/dialog-ok.png'

function DialogOkIcon({ className }: { className?: string }): ReactNode {
    return <img src={dialogOkIcon} className={className} alt="" />
}

export { DialogOkIcon }
