import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Input } from '@/components/ui/input'
import { changeProductName, changeProductPrice, filterSelector } from '@/features/slices/filterSlice'
import { ChangeEvent, FC } from 'react'

const FilterList: FC = () => {
    const { productInput, productPrice } = useAppSelector(filterSelector)
    const dispatch = useAppDispatch()

    return (
        <div className='flex flex-row  gap-4'>
            <Input value={productInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeProductName(e.target.value))}
                placeholder='Введите название продукта'
                type='text'
            />

            <Input value={productPrice}
                onChange={(e: any) => dispatch(changeProductPrice(e.target.value))}
                placeholder='Введите цену'
                type='number'
                min={0}
            />

        </div>
    )
}

export default FilterList