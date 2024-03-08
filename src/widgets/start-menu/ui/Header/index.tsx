import { type ReactNode } from 'react'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import userAvatar from '@shared/assets/images/user-avatar.png'

import './styles.scss'

function Header(): ReactNode {
    return (
        <div className="start-menu__header">
            <img
                src={userAvatar}
                alt=""
                className="start-menu__header__user-avatar"
            />
            <NotoSansTextElement className="start-menu__header__user-name">
                User
            </NotoSansTextElement>
        </div>
    )
}

export { Header }
