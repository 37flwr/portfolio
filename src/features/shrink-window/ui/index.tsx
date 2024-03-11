import { type ReactNode } from 'react'
import { shrinkWindow } from '../model/shrinkWindow'
import { WindowDTO } from '@shared/types/Window.interface'
import { ShrinkWindowButton } from '@shared/ui/windows-buttons'

function ShrinkWindow({ windowId }: WindowDTO): ReactNode {
    return <ShrinkWindowButton onClick={() => shrinkWindow(windowId)} />
}

export { ShrinkWindow }
