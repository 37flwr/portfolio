import { type ReactNode } from 'react'
import { ButtonWithHoverActiveStaleStates } from '@entities/button-with-states'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import Icons from '@shared/ui/windows-icons'
import './styles.scss'
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
                    active={<Icons.Dropdown.Active />}
                    hover={<Icons.Dropdown.Hover />}
                    stale={<Icons.Dropdown.Stale />}
                    onClick={() => {}}
                    className="folder__address-bar__content__dropdown"
                />
            </div>
            <div className="folder__address-bar__go-btn">
                <Icons.DialogOk className="folder__address-bar__go-btn__icon" />
                <NotoSansTextElement className="folder__address-bar__go-btn__label">
                    Go
                </NotoSansTextElement>
            </div>
        </div>
    )
}

export { AddressBar }
