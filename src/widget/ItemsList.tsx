import { FC } from 'react'
import { useIDS } from '@/features/hooks/useIDS'
import { useItems } from '@/features/hooks/useItems'
import { goodsDescription } from '@/types/types'
import Loading from '@/components/Loading'
import Item from '@/entities/Item'

const ItemsList: FC = () => {
    const ids: string[] = useIDS()
    const items: goodsDescription[] = useItems(ids)

    const filteredItems = items.filter((item, index, self) => {
        return index === self.findIndex((i) => i.id === item.id);
    });

    if (!ids) return <Loading />

    return (
        <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {filteredItems && filteredItems.map(({ brand, id, price, product }) => (
                <Item brand={brand} id={id} price={price} product={product} />
            ))}
        </div>
    )
}

export default ItemsList