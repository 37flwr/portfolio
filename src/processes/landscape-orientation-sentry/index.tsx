import { useEffect, type PropsWithChildren } from 'react'
import { useApplicationStateStore } from '@app/store/applicationState'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import './styles.scss'

const getOrientation = () => {
    const orientation = window.screen.orientation.type

    if (
        orientation === 'landscape-primary' ||
        orientation === 'landscape-secondary'
    ) {
        return 'landscape'
    }

    return 'portrait'
}

function LandscapeOrientationSentry({ children }: PropsWithChildren) {
    const { deviceOrientation, setDeviceOrientationTo } =
        useApplicationStateStore()

    const updateOrientation = () => {
        setDeviceOrientationTo(getOrientation())
    }

    useEffect(() => {
        updateOrientation()

        window.addEventListener('orientationchange', updateOrientation)
        return () => {
            window.removeEventListener('orientationchange', updateOrientation)
        }
    }, [])

    if (deviceOrientation === 'portrait') {
        return (
            <div className="orientation-sentry">
                <div className="orientation-sentry__phone"></div>
                <NotoSansTextElement className="orientation-sentry__message">
                    Please rotate your device!
                </NotoSansTextElement>
            </div>
        )
    }

    return <>{children}</>
}

export { LandscapeOrientationSentry }
