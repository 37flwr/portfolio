import { type ReactNode } from 'react'
import { closeWindow } from '../model/closeWindow'
import { CloseWindowButton } from '@shared/ui/windows-buttons'
import { WindowDTO } from '@shared/types/Window.interface'

function CloseWindow({ windowId }: WindowDTO): ReactNode {
    return <CloseWindowButton onClick={() => closeWindow(windowId)} />
}

export { CloseWindow }
