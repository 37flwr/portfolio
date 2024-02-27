import { type ReactNode } from 'react'

import './styles.scss'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import { ButtonWithHoverActiveStaleStates } from '@entities/button-with-states'
import {
    DropdownIconActive,
    DropdownIconHover,
    DropdownIconStale,
} from '@shared/ui/windows-icons/dropdown'
import { DialogOkIcon } from '@shared/ui/windows-icons/dialog-ok'
interface IFolderAddressBar {
    Icon: ReactNode
    folderName: string
}

function AddressBar({ Icon, folderName }: IFolderAddressBar): ReactNode {
    return (
        <div className="folder__address-bar">
            <NotoSansTextElement className="folder__address-bar__title">
                Address
            </NotoSansTextElement>
            <div className="folder__address-bar__content">
                <div className="folder__address-bar__content__icon">{Icon}</div>
                <NotoSansTextElement className="folder__address-bar__content__label">
                    {folderName}
                </NotoSansTextElement>
                <ButtonWithHoverActiveStaleStates
                    active={<DropdownIconActive />}
                    hover={<DropdownIconHover />}
                    stale={<DropdownIconStale />}
                    onClick={() => {}}
                    className="folder__address-bar__content__dropdown"
                />
            </div>
            <div className="folder__address-bar__go-btn">
                <DialogOkIcon className="folder__address-bar__go-btn__icon" />
                <NotoSansTextElement className="folder__address-bar__go-btn__label">
                    Go
                </NotoSansTextElement>
            </div>
        </div>
    )
}

export { AddressBar }
