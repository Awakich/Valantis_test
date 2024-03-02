import Loading from '@/components/Loading'
import Item from '@/entities/Item'
import { FC } from 'react'
import { useIDS } from '@/features/hooks/useIDS'
import { useItems } from '@/features/hooks/useItems'
import { goodsDescription } from '@/types/types'
import { useAppSelector } from '@/app/hooks'
import { paginationSelector } from '@/features/slices/paginationSlice'
import { filterSelector } from '@/features/slices/filterSlice'

const ItemsList: FC = () => {
    const pickedNumber = useAppSelector(paginationSelector)
    const { productPrice: price, productInput } = useAppSelector(filterSelector)

    const action = !!price ? 'get_ids' : 'filter'

    const ids: string[] = useIDS(pickedNumber.offset, action, price)
    const items: goodsDescription[] = useItems(ids)

    const uniqItems = items.filter((item, index, self) => {
        return index === self.findIndex((i) => i.id === item.id);
    });

    if (!ids) return <Loading />

    return (
        <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {uniqItems && uniqItems.
                filter((item) => item.product.toLowerCase().includes(productInput.toLowerCase()) ? item : '').
                map(({ brand, id, price, product }) => (
                    <Item brand={brand} id={id} price={price} product={product} />
                ))}
        </div>
    )
}

export default ItemsList