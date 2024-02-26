import { type ReactNode } from 'react'
import mediaEjectIcon from '@shared/assets/icons/media-eject.svg'

function MediaEject({ className }: { className?: string }): ReactNode {
    return <img src={mediaEjectIcon} className={className} alt="Sound" />
}

export { MediaEject as MediaEjectIcon }
