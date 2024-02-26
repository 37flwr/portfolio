import { type ReactNode } from 'react'
import { WindowActionButtonFactory } from '@entities/window-action-button-factory'
import { expandWindow } from '../model/expandWindow'
import { WindowDTO } from '@shared/types/Window.interface'

function ExpandWindow({ windowId }: WindowDTO): ReactNode {
    return (
        <WindowActionButtonFactory
            onClick={() => expandWindow(windowId)}
            type="expand"
        />
    )
}

export { ExpandWindow }
