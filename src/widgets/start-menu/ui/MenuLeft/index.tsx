import { type ReactNode } from 'react'
import { MenuItem } from '../MenuItem'
import { Separator } from '../Separator'
import { Each } from '@shared/ui/each'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import arrowIcon from '@shared/assets/icons/arrow-right.ico'
import ieLogo from '@shared/assets/icons/ie.png'
import emailLogo from '@shared/assets/icons/email.png'
import minesweeperLogo from '@shared/assets/icons/minesweeper.png'
import notepadLogo from '@shared/assets/icons/notepad.png'
import winampLogo from '@shared/assets/icons/winamp.png'
import paintLogo from '@shared/assets/icons/paint.png'
import windowsMediaPlayerLogo from '@shared/assets/icons/windows-media-player.png'
import windowsMessengerLogo from '@shared/assets/icons/windows-messenger.png'

import './styles.scss'

const topSideStartMenuItems = [
    {
        img: ieLogo,
        title: 'Internet',
        description: 'Internet Explorer',
    },
    {
        img: emailLogo,
        title: 'Email',
        description: 'Outlook Express',
    },
]

const bottomSideStartMenuItems = [
    {
        img: minesweeperLogo,
        title: 'Minesweeper',
    },
    {
        img: notepadLogo,
        title: 'Notepad',
    },
    {
        img: winampLogo,
        title: 'Winamp',
    },
    {
        img: paintLogo,
        title: 'Paint',
    },
    {
        img: windowsMediaPlayerLogo,
        title: 'Windows Media Player',
    },
    {
        img: windowsMessengerLogo,
        title: 'Windows Messenger',
    },
]

function MenuLeft(): ReactNode {
    return (
        <div className="start-menu__left">
            <Each
                of={topSideStartMenuItems}
                render={(item, index) => (
                    <MenuItem
                        key={index}
                        variant="large"
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                )}
            />
            <Separator />
            <Each
                of={bottomSideStartMenuItems}
                render={(item, index) => (
                    <MenuItem
                        key={index}
                        variant="large"
                        img={item.img}
                        title={item.title}
                    />
                )}
            />
            <div style={{ flex: '1 1 0%' }} />
            <Separator />
            <div className="start-menu__left__footer">
                <NotoSansTextElement className="start-menu__left__footer__text">
                    All Programs
                </NotoSansTextElement>
                <img
                    src={arrowIcon}
                    className="start-menu__left__footer__icon"
                    alt=""
                />
            </div>
        </div>
    )
}

export { MenuLeft }
