import { ReactNode } from 'react'
import cv from '@shared/assets/pdf/Yaroslav_Nesteryshyn_CV.pdf'
import './styles.scss'

function CV(): ReactNode {
    return <iframe src={cv} style={{ width: '100%', height: '100%' }}></iframe>
}

export { CV }
