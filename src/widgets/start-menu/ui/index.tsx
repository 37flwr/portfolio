import { type ReactNode } from 'react'
import { useApplicationStateStore } from '@app/store/applicationState'
import { Modal } from '@entities/modal/ui'
import { Header } from './Header'
import { Footer } from './Footer'
import { MenuLeft } from './MenuLeft'
import { MenuRight } from './MenuRight'

import './styles.scss'

function StartMenu(): ReactNode {
    const startMenuVisible = useApplicationStateStore(
        (store) => store.menuOpened
    )

    const setMenuOpenedStateTo = useApplicationStateStore(
        (store) => store.setMenuOpenedStateTo
    )

    return (
        <Modal
            isOpen={startMenuVisible}
            onClose={() => setMenuOpenedStateTo(false)}
        >
            <div className="start-menu">
                <Header />
                <div className="start-menu__content">
                    <div className="start-menu__content__orange-line" />
                    <MenuLeft />
                    <MenuRight />
                </div>
                <Footer />
            </div>
        </Modal>
    )
}

export { StartMenu }
