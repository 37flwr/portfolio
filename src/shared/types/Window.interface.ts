import { ReactNode } from 'react'
import { ShortcutIcons, Shortcuts } from './Shortcuts.interface'

export type WindowStates = 'opened' | 'minimized' | 'expanded'

export interface Window {
    windowId: string
    windowIcon: keyof ShortcutIcons
    windowTitle: string
    windowSize: { w: number; h: number }
    isExpanded: boolean
    windowState: WindowStates
    application: keyof Shortcuts
    coordinates: { x: number; y: number; z: number }
}

export interface OpenWindowDTO {
    icon: keyof ShortcutIcons
    title: string
    application: keyof Shortcuts
}

export interface RenderOpenWindow extends OpenWindowDTO {
    Icon: ReactNode
}

export interface WindowDTO {
    windowId: string
}

export type WindowFrameDTO = Pick<
    Window,
    | 'windowSize'
    | 'windowTitle'
    | 'isExpanded'
    | 'application'
    | 'windowId'
    | 'coordinates'
> & { className?: string }
