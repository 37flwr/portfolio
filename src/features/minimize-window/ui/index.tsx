import { type ReactNode } from 'react'
import { minimizeWindow } from '../model/minimizeWindow'
import { WindowDTO } from '@shared/types/Window.interface'
import { MinimizeWindowButton } from '@shared/ui/windows-buttons'

function MinimizeWindow({ windowId }: WindowDTO): ReactNode {
    return <MinimizeWindowButton onClick={() => minimizeWindow(windowId)} />
}

export { MinimizeWindow }
