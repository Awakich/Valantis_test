import Loading from '@/components/Loading'
import { useIDS } from '@/features/hooks/useIDS'
import { useItems } from '@/features/hooks/useItems'
import { goodsDescription } from '@/types/types'
import { FC, Suspense } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
    const ids: string[] = useIDS()
    const items: goodsDescription[] = useItems(ids)

    return (
        <section>
            <h2>Goods</h2>
            <Suspense fallback={<Loading />}>
                {items && items.map(({ brand, id, price, product }) => (
                    <section className='border' key={id}>
                        <Link to={`/${id}`}>
                            <p>{`Brand is ${brand ? brand : 'not found'}`}</p>
                            <p>{`Price is ${price} ₽`}</p>
                            <p>{`Product is ${product}`}</p>
                        </Link>
                    </section>
                ))}
            </Suspense>
        </section>
    )
}

export default Home