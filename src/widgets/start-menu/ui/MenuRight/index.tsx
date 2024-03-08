import { type ReactNode } from 'react'
import { MenuItem } from '../MenuItem'
import { Separator } from '../Separator'
import { Each } from '@shared/ui/each'
import documentsIcon from '@shared/assets/icons/documents.png'
import recentDocumentsIcon from '@shared/assets/icons/recent-documents.png'
import picturesIcon from '@shared/assets/icons/pictures.png'
import musicIcon from '@shared/assets/icons/music.png'
import myComputerIcon from '@shared/assets/icons/my-computer.png'
import controlPanelIcon from '@shared/assets/icons/control-panel.png'
import programAccessIcon from '@shared/assets/icons/program-access.png'
import connectToIcon from '@shared/assets/icons/connect-to.png'
import printersAndFaxesIcon from '@shared/assets/icons/printers-and-faxes.png'
import helpIcon from '@shared/assets/icons/help.png'
import searchIcon from '@shared/assets/icons/search.png'
import runIcon from '@shared/assets/icons/run.png'
import './styles.scss'

const topMenuItems = [
    {
        img: documentsIcon,
        title: 'My documents',
    },
    {
        img: recentDocumentsIcon,
        title: 'My Recent Documents',
    },
    {
        img: picturesIcon,
        title: 'My Pictures',
    },
    {
        img: musicIcon,
        title: 'My Music',
    },
    {
        img: myComputerIcon,
        title: 'My Computer',
    },
]

const middleMenuItems = [
    {
        img: controlPanelIcon,
        title: 'Control Panel',
    },
    {
        img: programAccessIcon,
        title: 'Set Program Access and Defaults',
    },
    {
        img: connectToIcon,
        title: 'Connect To',
    },
    {
        img: printersAndFaxesIcon,
        title: 'Printers and Faxes',
    },
]

const bottomMenuItems = [
    {
        img: helpIcon,
        title: 'Help and Support',
    },
    {
        img: searchIcon,
        title: 'Search',
    },
    {
        img: runIcon,
        title: 'Run...',
    },
]

function MenuRight(): ReactNode {
    return (
        <div className="start-menu__right">
            <Each
                of={topMenuItems}
                render={(item, index) => (
                    <MenuItem
                        key={index}
                        img={item.img}
                        title={item.title}
                        variant="small"
                        className="start-menu__right__item"
                    />
                )}
            />
            <Separator />
            <Each
                of={middleMenuItems}
                render={(item, index) => (
                    <MenuItem
                        key={index}
                        img={item.img}
                        title={item.title}
                        variant="small"
                        className="start-menu__right__item"
                    />
                )}
            />
            <Separator />
            <Each
                of={bottomMenuItems}
                render={(item, index) => (
                    <MenuItem
                        key={index}
                        img={item.img}
                        title={item.title}
                        variant="small"
                        className="start-menu__right__item"
                    />
                )}
            />
        </div>
    )
}

export { MenuRight }
