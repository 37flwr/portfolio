import { type ReactNode } from 'react'
import { expandWindow } from '../model/expandWindow'
import { WindowDTO } from '@shared/types/Window.interface'
import { ExpandWindowButton } from '@shared/ui/windows-buttons'

function ExpandWindow({ windowId }: WindowDTO): ReactNode {
    return <ExpandWindowButton onClick={() => expandWindow(windowId)} />
}

export { ExpandWindow }
