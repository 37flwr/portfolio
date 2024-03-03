import { createWithEqualityFn } from 'zustand/traditional'
import { persist } from 'zustand/middleware'
import { v4 as uuid } from 'uuid'
import { OpenWindowDTO } from '@shared/types/Window.interface'

type Shortcut = OpenWindowDTO & {
    shortcutId: string
    coordinates: { x: number; y: number }
}

const shortcutsArray: Array<Shortcut> = [
    {
        shortcutId: uuid(),
        icon: 'pdf',
        title: 'My_CV.pdf',
        application: 'pdf/cv',
        coordinates: {
            x: 0,
            y: 0,
        },
    },
    {
        shortcutId: uuid(),
        icon: 'secret',
        title: 'My Ledger Mnemonic',
        application: 'meme/rickAstley',
        coordinates: {
            x: 0,
            y: 40,
        },
    },
    {
        shortcutId: uuid(),
        icon: 'folder',
        title: 'Certificates',
        application: 'folder/certificates',
        coordinates: {
            x: 0,
            y: 80,
        },
    },
]

interface ShortcutsStore {
    shortcuts: Array<Shortcut>
    changeShortcutPosition: (
        shortcutId: string,
        { x, y }: { x: number; y: number }
    ) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): ShortcutsStore => ({
    shortcuts: shortcutsArray,
    changeShortcutPosition: (shortcutId, coordinates) => {
        set((state: ShortcutsStore) => {
            const modifiedShortcutIdx = state.shortcuts.findIndex(
                (shortcut) => shortcut.shortcutId === shortcutId
            )
            const newWindows = [...state.shortcuts]
            newWindows[modifiedShortcutIdx].coordinates = {
                ...coordinates,
            }

            return {
                windows: [...newWindows],
            }
        })
    },
})

export const useShortcutsStore = createWithEqualityFn(
    persist(store, { name: 'shortcuts' })
)
