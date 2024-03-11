import { type ReactNode } from 'react'
import { WindowActionButton } from './Button'
import './styles.scss'

type Props = {
    onClick: () => void
}

const MinimizeWindow = ({ onClick }: Props): ReactNode => (
    <WindowActionButton onClick={onClick} type="minimize" />
)

const ExpandWindow = ({ onClick }: Props): ReactNode => (
    <WindowActionButton onClick={onClick} type="expand" />
)

const CloseWindow = ({ onClick }: Props): ReactNode => (
    <WindowActionButton onClick={onClick} type="close" />
)

const ShrinkWindow = ({ onClick }: Props): ReactNode => (
    <WindowActionButton onClick={onClick} type="shrink" />
)

export {
    MinimizeWindow as MinimizeWindowButton,
    ExpandWindow as ExpandWindowButton,
    CloseWindow as CloseWindowButton,
    ShrinkWindow as ShrinkWindowButton,
}
