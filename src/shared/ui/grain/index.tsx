import { type PropsWithChildren, type ReactNode } from 'react'
import grainImage from '@shared/assets/images/grain.png'
import './styles.scss'

function Grain({ children }: PropsWithChildren): ReactNode {
    return (
        <div className="grained">
            <img className="grain" src={grainImage} />
            <div className="grain-children">{children}</div>
        </div>
    )
}

export { Grain }
