import { type ReactNode } from 'react'
import Icons from '@shared/ui/windows-icons'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import './styles.scss'

function FunctionBar(): ReactNode {
    return (
        <div className="folder__function-bar_wrapper">
            <div className="folder__function-bar">
                <div className="folder__function-bar__option">
                    <Icons.Backward className="folder__function-bar__option__icon" />
                    <NotoSansTextElement className="folder__function-bar__option__label">
                        Back
                    </NotoSansTextElement>
                    <div className="folder__function-bar__option__arrow" />
                </div>
                <div className="folder__function-bar__option">
                    <Icons.Forward className="folder__function-bar__option__icon" />
                    <div className="folder__function-bar__option__arrow" />
                </div>
                <div className="folder__function-bar__option">
                    <Icons.Folder.Downloads className="folder__function-bar__option__icon" />
                </div>
                <div className="folder__function-bar__separate" />
                <div className="folder__function-bar__option">
                    <Icons.Search className="folder__function-bar__option__icon" />
                    <NotoSansTextElement className="folder__function-bar__option__label">
                        Search
                    </NotoSansTextElement>
                </div>
                <div className="folder__function-bar__option">
                    <Icons.Folder.Base className="folder__function-bar__option__icon" />
                    <NotoSansTextElement className="folder__function-bar__option__label">
                        Folders
                    </NotoSansTextElement>
                </div>
                <div className="folder__function-bar__separate" />
                <div className="folder__function-bar__option">
                    <Icons.Folder.Programs className="folder__function-bar__option__icon" />
                    <div className="folder__function-bar__option__arrow" />
                </div>
            </div>
        </div>
    )
}

export { FunctionBar }
