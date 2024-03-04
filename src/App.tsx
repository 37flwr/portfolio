import { type JSX } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from '@app/routes'
import { LandscapeOrientationSentry } from '@processes/landscape-orientation-sentry'

import './app/index.scss'

function App(): JSX.Element {
    return (
        <Router>
            <LandscapeOrientationSentry>
                <AppRoutes />
            </LandscapeOrientationSentry>
        </Router>
    )
}

export default App
