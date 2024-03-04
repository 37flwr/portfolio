import { type PropsWithChildren, type ReactNode } from 'react'
import Icons from '@shared/ui/windows-icons'
import { NotoSansTextElement } from '@shared/ui/text-elements'
import './styles.scss'

const contentCards: Array<{ header: ContentBlock; body: Array<ContentBlock> }> =
    [
        {
            header: { title: 'System Tasks', Icon: Icons.Pullup },
            body: [
                {
                    title: 'View system information',
                    Icon: Icons.Save,
                },
                {
                    title: 'Add or remove programs',
                    Icon: Icons.Save,
                },
                {
                    title: 'Change a setting',
                    Icon: Icons.Save,
                },
            ],
        },
        {
            header: { title: 'Other places', Icon: Icons.Pullup },
            body: [
                {
                    title: 'My Network Places',
                    Icon: Icons.Save,
                },
                {
                    title: 'My Documents',
                    Icon: Icons.Save,
                },
                {
                    title: 'Shared Documents',
                    Icon: Icons.Save,
                },
                {
                    title: 'Control Panel',
                    Icon: Icons.Save,
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
            {elements.map(({ Icon, title }, idx) => (
                <div className="folder__content__card__body__element" key={idx}>
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
                {contentCards.map((card, idx) => (
                    <div className="folder__content__card" key={idx}>
                        <ContentHeader
                            title={card.header.title}
                            Icon={card.header.Icon}
                        />
                        <ContentBody elements={card.body} />
                    </div>
                ))}
            </div>
            <div className="folder__content_right">{children}</div>
        </div>
    )
}

export { Content }
