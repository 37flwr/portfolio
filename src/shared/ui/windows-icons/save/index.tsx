import { type ReactNode } from 'react'

import saveIcon from '@shared/assets/icons/save-icon.png'

function SaveIcon({ className }: { className?: string }): ReactNode {
    return <img src={saveIcon} className={className} alt="" />
}

export { SaveIcon }
