import { type ReactNode } from 'react'
import logOffIcon from '@shared/assets/icons/log-off.png'
import turnOffIcon from '@shared/assets/icons/turn-off.png'

import './styles.scss'
import { NotoSansTextElement } from '@shared/ui/text-elements'

function FooterItem({ img, text }: { img: string; text: string }): ReactNode {
    return (
        <div className="start-menu__footer__item">
            <img src={img} className="start-menu__footer__item__img" alt="" />
            <NotoSansTextElement className="start-menu__footer__item__text">
                {text}
            </NotoSansTextElement>
        </div>
    )
}

function Footer(): ReactNode {
    return (
        <div className="start-menu__footer">
            <FooterItem img={logOffIcon} text="Log Off" />
            <FooterItem img={turnOffIcon} text="Turn Off Computer" />
        </div>
    )
}

export { Footer }
