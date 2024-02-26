import { type ReactNode } from 'react'
import { SoundIcon } from '@shared/ui/windows-icons'
import { TahomaTextElement } from '@shared/ui/text-elements'
import { formatAMPM } from '@shared/lib/formatters'
import './styles.scss'
import { SecurityIconWarning } from '@shared/ui/windows-icons/security'
import { MediaEjectIcon } from '@shared/ui/windows-icons/media-eject'

function SystemTray(): ReactNode {
    return (
        <div className="system-tray">
            <div className="system-tray__icons">
                <SoundIcon className="system-tray__icons__element" />
                <SecurityIconWarning className="system-tray__icons__element" />
                <MediaEjectIcon className="system-tray__icons__element" />
            </div>
            <TahomaTextElement className="system-tray__time">
                {formatAMPM(new Date())}
            </TahomaTextElement>
        </div>
    )
}

export { SystemTray }
