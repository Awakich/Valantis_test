import { layout } from '@/types/types'
import { FC } from 'react'

const Layout: FC<layout> = ({ children }) => {
    return (
        <section className='p-20'>
            {children}
        </section>
    )
}

export default Layout