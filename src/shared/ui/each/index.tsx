import { Children, type ReactNode } from 'react'

type Props<T> = {
    of: Array<T>
    render: (item: T, index: number) => ReactNode
}

const Each = <T,>({ of, render }: Props<T>) =>
    Children.toArray(of.map((item, index) => render(item, index)))

export { Each }
