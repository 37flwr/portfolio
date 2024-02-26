import { type ReactNode } from 'react'
import { GoBackwardIcon } from '@shared/ui/windows-icons/go-backward'
import { GoForwardIcon } from '@shared/ui/windows-icons/go-forward'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import { FolderDownloadsIcon } from '@shared/ui/application-icons/folder-downloads'
import './styles.scss'
import { SearchIcon } from '@shared/ui/windows-icons/search'
import { FolderIcon } from '@shared/ui/application-icons/folder'
import { FolderProgramsIcon } from '@shared/ui/application-icons/folder-programs'

function FunctionBar(): ReactNode {
    return (
        <div className="folder__function-bar_wrapper">
            <div className="folder__function-bar">
                <div className="folder__function-bar__option">
                    <GoBackwardIcon className="folder__function-bar__option__icon" />
                    <NotoSansTextElement className="folder__function-bar__option__label">
                        Back
                    </NotoSansTextElement>
                    <div className="folder__function-bar__option__arrow" />
                </div>
                <div className="folder__function-bar__option">
                    <GoForwardIcon className="folder__function-bar__option__icon" />
                    <div className="folder__function-bar__option__arrow" />
                </div>
                <div className="folder__function-bar__option">
                    <FolderDownloadsIcon className="folder__function-bar__option__icon" />
                </div>
                <div className="folder__function-bar__separate" />
                <div className="folder__function-bar__option">
                    <SearchIcon className="folder__function-bar__option__icon" />
                    <NotoSansTextElement className="folder__function-bar__option__label">
                        Search
                    </NotoSansTextElement>
                </div>
                <div className="folder__function-bar__option">
                    <FolderIcon className="folder__function-bar__option__icon" />
                    <NotoSansTextElement className="folder__function-bar__option__label">
                        Folders
                    </NotoSansTextElement>
                </div>
                <div className="folder__function-bar__separate" />
                <div className="folder__function-bar__option">
                    <FolderProgramsIcon className="folder__function-bar__option__icon" />
                    <div className="folder__function-bar__option__arrow" />
                </div>
            </div>
        </div>
    )
}

export { FunctionBar }
