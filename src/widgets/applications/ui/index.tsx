import { type ReactNode } from 'react'
import { OpenWindowButton } from '@features/open-window'
import { applicationsArray } from '../lib/applicationsArray'
import { applicationIconScheme } from '../lib/applicationScheme'

import './styles.scss'

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
