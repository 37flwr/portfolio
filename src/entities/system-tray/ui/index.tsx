import { type ReactNode } from 'react'
import Icons from '@shared/ui/windows-icons'
import { TahomaTextElement } from '@shared/ui/text-elements'
import { formatAMPM } from '@shared/lib/formatters'
import './styles.scss'

function SystemTray(): ReactNode {
    return (
        <div className="system-tray">
            <div className="system-tray__icons">
                <Icons.Sound className="system-tray__icons__element" />
                <Icons.Security.Warning className="system-tray__icons__element" />
                <Icons.MediaEject className="system-tray__icons__element" />
            </div>
            <TahomaTextElement className="system-tray__time">
                {formatAMPM(new Date())}
            </TahomaTextElement>
        </div>
    )
}

export { SystemTray }
