import { ReactNode } from 'react'
import cv from '@shared/assets/pdf/cv.pdf'

function CV(): ReactNode {
    return <iframe src={cv} style={{ width: '100%', height: '100%' }}></iframe>
}

export { CV }
