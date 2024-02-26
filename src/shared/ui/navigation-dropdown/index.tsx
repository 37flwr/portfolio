import { type ReactNode } from 'react'
import { NotoSansTextElement } from '../text-elements'
import './styles.scss'

type INavigationDropdrow = { label: string }

function NavigationDropdown({ label }: INavigationDropdrow): ReactNode {
    return (
        <div className="drop-down">
            <NotoSansTextElement className="drop-down__label">
                {label}
            </NotoSansTextElement>
        </div>
    )
}

export default NavigationDropdown
