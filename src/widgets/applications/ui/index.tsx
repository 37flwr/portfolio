import { type ReactNode } from 'react'
import { OpenWindowButton } from '@features/open-window'
import { applicationsArray } from '../lib/applicationsArray'

import './styles.scss'
import { applicationIconScheme } from '../applications'

function Applications(): ReactNode {
    return (
        <div className="applications">
            {applicationsArray.map((application) => (
                <OpenWindowButton
                    key={application.title}
                    {...application}
                    iconTitle={application.icon}
                    Icon={applicationIconScheme[application.icon]}
                />
            ))}
        </div>
    )
}

export { Applications }
