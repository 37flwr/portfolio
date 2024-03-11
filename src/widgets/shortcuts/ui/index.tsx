import { useState, type ReactNode } from 'react'
import { useShortcutsStore } from '@app/store/shortcuts'
import { OpenWindowButton } from '@features/open-window'
import { DraggableShortcut } from '@features/drag-shortcut'
import { checkTouchDevice } from '@shared/lib/checkTouchDevice'
import { shortcutIconScheme } from '../lib/shortcutsScheme'
import './styles.scss'
import { Each } from '@shared/ui/each'

function Shortcuts(): ReactNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [touchDevice, _] = useState(checkTouchDevice())
    const shortcuts = useShortcutsStore().shortcuts
    return (
        <div className="shortcuts">
            <Each
                of={shortcuts}
                render={(shortcut, index) =>
                    touchDevice ? (
                        <div className="shortcuts-grid" key={index}>
                            <OpenWindowButton
                                {...shortcut}
                                iconTitle={shortcut.icon}
                                Icon={shortcutIconScheme[shortcut.icon]}
                            />
                        </div>
                    ) : (
                        <DraggableShortcut
                            shortcutId={shortcut.shortcutId}
                            key={index}
                        >
                            <OpenWindowButton
                                {...shortcut}
                                iconTitle={shortcut.icon}
                                Icon={shortcutIconScheme[shortcut.icon]}
                            />
                        </DraggableShortcut>
                    )
                }
            />
            <Each
                of={shortcuts}
                render={(shortcut, index) =>
                    touchDevice ? (
                        <div className="shortcuts-grid" key={index}>
                            <OpenWindowButton
                                {...shortcut}
                                iconTitle={shortcut.icon}
                                Icon={shortcutIconScheme[shortcut.icon]}
                            />
                        </div>
                    ) : (
                        <DraggableShortcut
                            shortcutId={shortcut.shortcutId}
                            key={index}
                        >
                            <OpenWindowButton
                                {...shortcut}
                                iconTitle={shortcut.icon}
                                Icon={shortcutIconScheme[shortcut.icon]}
                            />
                        </DraggableShortcut>
                    )
                }
            />
        </div>
    )
}

export { Shortcuts }
