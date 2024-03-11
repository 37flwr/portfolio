import { type ReactNode } from 'react'
import { Shortcuts } from '@widgets/shortcuts'
import { Windows } from '@widgets/windows'
import { Taskbar } from '@widgets/taskbar'
import { StartMenu } from '@widgets/start-menu'
import wallpaper from '@shared/assets/images/wallpaper.jpeg'

import './styles.scss'

function Desktop(): ReactNode {
    return (
        <>
            <div className="desktop">
                <Shortcuts />
                <Windows />
            </div>
            <StartMenu />
            <Taskbar />
            <img className="wallpaper" src={wallpaper} alt="" />
        </>
    )
}

export { Desktop }
