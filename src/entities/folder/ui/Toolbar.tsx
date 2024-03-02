import { type ReactNode } from 'react'
import NavigationDropdown from '@shared/ui/navigation-dropdown'
import windowsLogo from '@shared/assets/icons/windows-logo.png'

import './styles.scss'

function Toolbar(): ReactNode {
    return (
        <div className="folder__toolbar">
            <div className="folder__toolbar__options">
                {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map(
                    (el) => (
                        <NavigationDropdown key={el} label={el} />
                    )
                )}
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
