import { type ReactNode } from 'react'
import soundIcon from '@shared/assets/icons/sound.svg'

function SoundIcon({ className }: { className?: string }): ReactNode {
    return <img src={soundIcon} className={className} alt="Sound" />
}

export { SoundIcon as SoundIcon }
