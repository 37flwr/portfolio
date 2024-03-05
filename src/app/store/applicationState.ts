import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DeviceOrientation = 'landscape' | 'portrait'
interface ApplicationStateStore {
    menuOpened: boolean
    showedBootUpScreen: boolean
    deviceOrientation: DeviceOrientation
    setMenuOpenedStateTo: (value: boolean) => void
    setShowedBootUpScreenTo: (value: boolean) => void
    setDeviceOrientationTo: (value: DeviceOrientation) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any): ApplicationStateStore => ({
    menuOpened: false,
    setMenuOpenedStateTo: (state: boolean) => {
        set(() => ({
            menuOpened: state,
        }))
    },
    showedBootUpScreen: false,
    setShowedBootUpScreenTo: (state: boolean) => {
        set(() => ({
            showedBootUpScreen: state,
        }))
    },
    deviceOrientation: 'landscape',
    setDeviceOrientationTo: (orientation: DeviceOrientation) => {
        set(() => ({
            deviceOrientation: orientation,
        }))
    },
})

export const useApplicationStateStore = create(
    persist(store, { name: 'applicationState' })
)
