import { type ReactNode } from 'react'
import NavigationDropdown from '@shared/ui/navigation-dropdown'
import windowsLogo from '@shared/assets/icons/windows-logo.png'

import './styles.scss'
import { Each } from '@shared/ui/each'

const navigationItems = ['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help']

function Toolbar(): ReactNode {
    return (
        <div className="folder__toolbar">
            <div className="folder__toolbar__options">
                <Each
                    of={navigationItems}
                    render={(el, index) => (
                        <NavigationDropdown key={index} label={el} />
                    )}
                />
            </div>
            <div className="folder__toolbar__win-logo">
                <img
                    className="folder__toolbar__win-logo__img"
                    src={windowsLogo}
                    alt=""
                />
            </div>
        </div>
    )
}

export { Toolbar }
