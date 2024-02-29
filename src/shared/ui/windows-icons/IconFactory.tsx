import { type ReactNode } from 'react'

interface IconFactoryInterface {
    src: string
    className?: string
    alt?: string
}

function IconFactory({ src, className, alt }: IconFactoryInterface): ReactNode {
    return <img src={src} className={className} alt={alt} />
}

export { IconFactory }
