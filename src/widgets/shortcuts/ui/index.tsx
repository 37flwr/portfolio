import { type ReactNode } from 'react'
import { OpenWindowButton } from '@features/open-window'
import { shortcutsArray } from '../lib/shortcutsArray'
import { shortcutIconScheme } from '../lib/shortcutsScheme'

import './styles.scss'

function Shortcuts(): ReactNode {
    return (
        <div className="shortcuts">
            {shortcutsArray.map((shortcut) => (
                <OpenWindowButton
                    key={shortcut.title}
                    {...shortcut}
                    iconTitle={shortcut.icon}
                    Icon={shortcutIconScheme[shortcut.icon]}
                />
            ))}
        </div>
    )
}

export { Shortcuts }
