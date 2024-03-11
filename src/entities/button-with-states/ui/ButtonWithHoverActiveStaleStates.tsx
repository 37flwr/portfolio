import { useState, type ReactNode } from 'react'

type Props = {
    active: ReactNode
    hover: ReactNode
    stale: ReactNode
    className?: string
    onClick: () => void
}

function ButtonWithHoverActiveStaleStates({
    active,
    hover,
    stale,
    onClick,
    className,
}: Props): ReactNode {
    const [activeState, setActiveState] = useState<boolean>(false)
    const [hoverState, setHoverState] = useState<boolean>(false)
    return (
        <button
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => {
                setHoverState(false)
                setActiveState(false)
            }}
            onMouseDown={() => {
                setHoverState(false)
                setActiveState(true)
            }}
            onMouseUp={() => {
                setHoverState(true)
                setActiveState(false)
                onClick()
            }}
            className={className}
        >
            {activeState ? active : hoverState ? hover : stale}
        </button>
    )
}

export { ButtonWithHoverActiveStaleStates }
