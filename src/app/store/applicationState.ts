import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ApplicationStateStore {
    menuOpened: boolean
    setMenuOpenedStateTo: (value: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): ApplicationStateStore => ({
    menuOpened: false,
    setMenuOpenedStateTo: (state: boolean) => {
        set(() => ({
            menuOpened: state,
        }))
    },
})

export const useApplicationStateStore = create(
    persist(store, { name: 'applicationState' })
)
