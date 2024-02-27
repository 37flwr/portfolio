import { type PropsWithChildren, type ReactNode } from 'react'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import { PullupIcon } from '@shared/ui/windows-icons/pullup'
import { SaveIcon } from '@shared/ui/windows-icons/save'
import './styles.scss'

const contentCards: Array<{ header: ContentBlock; body: Array<ContentBlock> }> =
    [
        {
            header: { title: 'System Tasks', Icon: PullupIcon },
            body: [
                {
                    title: 'View system information',
                    Icon: SaveIcon,
                },
                {
                    title: 'Add or remove programs',
                    Icon: SaveIcon,
                },
                {
                    title: 'Change a setting',
                    Icon: SaveIcon,
                },
            ],
        },
        {
            header: { title: 'Other places', Icon: PullupIcon },
            body: [
                {
                    title: 'My Network Places',
                    Icon: SaveIcon,
                },
                {
                    title: 'My Documents',
                    Icon: SaveIcon,
                },
                {
                    title: 'Shared Documents',
                    Icon: SaveIcon,
                },
                {
                    title: 'Control Panel',
                    Icon: SaveIcon,
                },
            ],
        },
    ]

interface ContentBlock {
    title: string
    Icon: ({ className }: { className: string }) => ReactNode
}

function ContentHeader({ title, Icon }: ContentBlock): ReactNode {
    return (
        <div className="folder__content__card__header">
            <NotoSansTextElement className="folder__content__card__header__text">
                {title}
            </NotoSansTextElement>
            <Icon className="folder__content__card__header__icon" />
        </div>
    )
}

function ContentBody({
    elements,
}: {
    elements: Array<ContentBlock>
}): ReactNode {
    return (
        <div className="folder__content__card__body">
            {elements.map(({ Icon, title }) => (
                <div className="folder__content__card__body__element">
                    <Icon className="folder__content__card__body__element__icon" />
                    <NotoSansTextElement className="folder__content__card__body__element__text">
                        {title}
                    </NotoSansTextElement>
                </div>
            ))}
        </div>
    )
}

function Content({ children }: PropsWithChildren): ReactNode {
    return (
        <div className="folder__content">
            <div className="folder__content_left">
                {contentCards.map((card) => {
                    return (
                        <div className="folder__content__card">
                            <ContentHeader
                                title={card.header.title}
                                Icon={card.header.Icon}
                            />
                            <ContentBody elements={card.body} />
                        </div>
                    )
                })}
            </div>
            <div className="folder__content_right">{children}</div>
        </div>
    )
}

export { Content }
