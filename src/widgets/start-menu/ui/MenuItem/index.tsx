import { type ReactNode } from 'react'
import cn from 'classnames'
import { NotoSansTextElement } from '@shared/ui/text-elements'

import './styles.scss'

type Props = {
    img: string
    title: string
    description?: string
    variant: 'small' | 'large'
    className?: string
}

function MenuItem({
    img,
    title,
    description,
    variant,
    className,
}: Props): ReactNode {
    return (
        <div
            className={cn(
                'start-menu__item',
                variant === 'small'
                    ? 'start-menu__item_small'
                    : 'start-menu__item_large',
                className
            )}
        >
            <img
                src={img}
                className={cn(
                    variant === 'small'
                        ? 'start-menu__item__img_small'
                        : 'start-menu__item__img_large'
                )}
                alt=""
            />
            <div className="start-menu__item__texts">
                <NotoSansTextElement className="start-menu__item__texts__title">
                    {title}
                </NotoSansTextElement>
                {description && (
                    <NotoSansTextElement className="start-menu__item__texts__description">
                        {description}
                    </NotoSansTextElement>
                )}
            </div>
        </div>
    )
}

export { MenuItem }
