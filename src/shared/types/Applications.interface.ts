import { ReactNode } from 'react'

type ApplicationTitles = 'none' | 'cv' | 'rickAstley' | 'certificates'

export type Applications = Record<ApplicationTitles, ReactNode>

type ApplicationIconKeys = 'none' | 'pdf' | 'secret' | 'folder'

export type ApplicationIcons = Record<ApplicationIconKeys, ReactNode>
