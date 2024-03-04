import { type ReactNode } from 'react'
import { OpenWindowButton } from '@features/open-window'
import { shortcutIconScheme } from '../lib/shortcutsScheme'

import './styles.scss'
import { DraggableShortcut } from '@features/drag-shortcut'
import { useShortcutsStore } from '@app/store/shortcuts'

function Shortcuts(): ReactNode {
    const shortcuts = useShortcutsStore().shortcuts
    return (
        <div className="shortcuts">
            {shortcuts.map((shortcut) => (
                <DraggableShortcut shortcutId={shortcut.shortcutId}>
                    <OpenWindowButton
                        key={shortcut.title}
                        {...shortcut}
                        iconTitle={shortcut.icon}
                        Icon={shortcutIconScheme[shortcut.icon]}
                    />
                </DraggableShortcut>
            ))}
        </div>
    )
}

export { Shortcuts }
