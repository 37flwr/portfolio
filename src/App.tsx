import { type JSX } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from '@app/routes'

import './app/index.scss'

function App(): JSX.Element {
    return (
        <Router>
            <AppRoutes />
        </Router>
    )
}

export default App
