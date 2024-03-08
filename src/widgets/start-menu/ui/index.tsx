import { type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { MenuLeft } from './MenuLeft'
import { MenuRight } from './MenuRight'

import './styles.scss'

function StartMenu(): ReactNode {
    return (
        <div className="start-menu">
            <Header />
            <div className="start-menu__content">
                <div className="start-menu__content__orange-line" />
                <MenuLeft />
                <MenuRight />
            </div>
            <Footer />
        </div>
    )
}

export { StartMenu }
