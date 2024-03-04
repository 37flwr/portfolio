import { useState, useEffect, type PropsWithChildren } from 'react'
import './styles.scss'
import { NotoSansTextElement } from '@shared/ui/text-elements'

const getOrientation = () => window.screen.orientation.type

function LandscapeOrientationSentry({ children }: PropsWithChildren) {
    const [orientation, setOrientation] = useState(getOrientation())

    const updateOrientation = () => {
        setOrientation(getOrientation())
    }

    useEffect(() => {
        console.log(orientation)

        window.addEventListener('orientationchange', updateOrientation)
        return () => {
            window.removeEventListener('orientationchange', updateOrientation)
        }
    }, [])

    if (
        orientation === 'portrait-primary' ||
        orientation === 'portrait-secondary'
    ) {
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
