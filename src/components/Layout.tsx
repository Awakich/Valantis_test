import { layout } from '@/types/types'
import { FC } from 'react'

const Layout: FC<layout> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default Layout