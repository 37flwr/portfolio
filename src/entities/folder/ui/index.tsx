import { type PropsWithChildren, type ReactNode } from 'react'
import { Toolbar } from './Toolbar'
import { FunctionBar } from './FunctionBar'
import { AddressBar } from './AddressBar'

import './styles.scss'
import { Content } from './Content'

interface IFolder extends PropsWithChildren {
    Icon: ReactNode
    folderName: string
}

function Folder({ Icon, folderName, children }: IFolder): ReactNode {
    return (
        <div className="folder">
            <Toolbar />
            <FunctionBar />
            <AddressBar Icon={Icon} folderName={folderName} />
            <Content>{children}</Content>
        </div>
    )
}

export { Folder }
