import { useItems } from '@/features/hooks/useItems'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const Good: FC = () => {
    const { pathname } = useLocation()
    const good = useItems([pathname.slice(1)])

    return (
        <div>
            Good by {good && <p>{good[0]?.id}</p>}
        </div>
    )
}

export default Good