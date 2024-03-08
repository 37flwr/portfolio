import { type PropsWithChildren } from 'react'
import { useOuterClick } from '../model/useOuterClick'

type Props = PropsWithChildren & {
    isOpen: boolean
    onClose: () => void
}

const Modal = ({ isOpen, onClose, children }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const innerRef = useOuterClick((_) => onClose())

    if (!isOpen) return null

    return <dialog ref={innerRef}>{children}</dialog>
}

export { Modal }
