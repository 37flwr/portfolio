import { type PropsWithChildren, type ReactNode } from 'react'
import { Toolbar } from './Toolbar'
import { FunctionBar } from './FunctionBar'

import './styles.scss'

function Folder({ children }: PropsWithChildren): ReactNode {
    return (
        <div className="folder">
            <Toolbar />
            <FunctionBar />
            {children}
        </div>
    )
}

export { Folder }
