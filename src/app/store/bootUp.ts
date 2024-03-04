import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BootUpStateStore {
    showedBootUpScreen: boolean
    setShowedBootUpScreenTo: (value: boolean) => void
}

// TODO: move all this to applicaion state slice

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): BootUpStateStore => ({
    showedBootUpScreen: false,
    setShowedBootUpScreenTo: (state: boolean) => {
        set(() => ({
            showedBootUpScreen: state,
        }))
    },
})

export const useBootUpStateStore = create(
    persist(store, { name: 'bootUpState' })
)
