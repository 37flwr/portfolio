import { type ReactNode } from 'react'
import { Each } from '../each'
import './styles.scss'

const loadingBarElements = 3

function LoadingBar(): ReactNode {
    return (
        <div className="loading-bar">
            <Each
                of={Array(...Array(loadingBarElements))}
                render={(_, index) => (
                    <div key={index} className="loading-bar__element" />
                )}
            />
        </div>
    )
}

export { LoadingBar as LoadingBar }
