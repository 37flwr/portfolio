import { useRoutes } from 'react-router'
import { BootUpToDesktopPage } from '@processes/index'

import { routes } from '@shared/constants/routes'

const publicRoutes = [
    {
        path: routes.BASE,
        element: <BootUpToDesktopPage />,
    },
]

const AppRoutes = (): JSX.Element | null => {
    return useRoutes(publicRoutes)
}

export default AppRoutes
