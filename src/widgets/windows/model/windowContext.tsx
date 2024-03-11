import { createContext, useContext } from 'react'
import { type Window } from '@shared/types/Window.interface'

export const WindowContext = createContext<Window | null>(null)

export const useWindowContext = () => {
    const window = useContext(WindowContext)

    if (window === null) {
        throw new Error('No window context was specified')
    }

    return window
}
