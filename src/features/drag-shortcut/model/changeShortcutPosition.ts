import { useShortcutsStore } from '@app/store/shortcuts'

export const changeShortcutPosition = (
    shortcutId: string,
    coordinates: { x: number; y: number }
) => {
    const changeShortcutPosition =
        useShortcutsStore.getState().changeShortcutPosition

    changeShortcutPosition(shortcutId, coordinates)
}
