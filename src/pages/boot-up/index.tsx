import { useEffect, type ReactNode, useState } from 'react'
import { useApplicationStateStore } from '@app/store/applicationState'
import { Grain } from '@shared/ui/grain'
import { TahomaTextElement } from '@shared/ui/text-elements'
import { LoadingBar } from '@shared/ui/loading-bar'
import microsoftLogoImage from '@shared/assets/images/microsoft-logo.png'
import windowsXpLogoImage from '@shared/assets/images/windows-xp-logo.png'
import greetingScreenBg from '@shared/assets/images/greeting-screen-bg.png'
import {
    BOOT_UP_TIMEOUT,
    GREETING_SCREEN_TIMEOUT,
} from '@shared/constants/numbers'

import './styles.scss'

function BootUpPage(): ReactNode {
    const [showGreetingScreen, setShowGreetingScreen] = useState<boolean>(false)

    const setShowedBootUpScreenTo = useApplicationStateStore(
        (store) => store.setShowedBootUpScreenTo
    )

    useEffect(() => {
        const showHomePage = setTimeout(
            () => setShowedBootUpScreenTo(true),
            BOOT_UP_TIMEOUT
        )

        const showGreeting = setTimeout(
            () => setShowGreetingScreen(true),
            GREETING_SCREEN_TIMEOUT
        )

        return () => {
            clearTimeout(showHomePage)
            clearTimeout(showGreeting)
        }
    }, [setShowedBootUpScreenTo])

    return (
        <Grain>
            {showGreetingScreen ? (
                <div className="greeting-screen">
                    <span className="greeting-screen__text">welcome</span>
                    <img
                        className="greeting-screen_bg"
                        src={greetingScreenBg}
                        alt=""
                    />
                </div>
            ) : (
                <div className="boot-up">
                    <div className="boot-up_content">
                        <div className="boot-up__xp-logo">
                            <img src={windowsXpLogoImage} alt="Windows XP" />
                        </div>
                        <LoadingBar />
                        <div className="boot-up__footer">
                            <TahomaTextElement className="boot-up__footer__copyright">
                                Copyright &copy; Microsoft Corporation
                            </TahomaTextElement>
                            <img
                                src={microsoftLogoImage}
                                className="boot-up__footer__microsoft-logo"
                                alt="Microsoft"
                            />
                        </div>
                    </div>
                </div>
            )}
        </Grain>
    )
}

export { BootUpPage }
