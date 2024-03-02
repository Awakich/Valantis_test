import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { paginationSelector, pickNumber } from '@/features/slices/paginationSlice'
import { paginationList } from '@/features/consts'
import { FC, Suspense } from 'react'
import Loading from '@/components/Loading'
import ItemsList from '@/widget/ItemsList'
import Filter from '@/entities/Filter'

const Home: FC = () => {
    const pickedNumber = useAppSelector(paginationSelector)
    const dispatch = useAppDispatch()

    return (
        <section className='flex flex-col space-y-8'>
            <h2 className='font-semibold text-2xl'>Товары</h2>
            <Suspense fallback={<Loading />}>
                <Filter />

                <ItemsList />

                <Pagination>
                    <PaginationContent>
                        {paginationList.map(({ id, value }, index) => (
                            <PaginationItem key={id}>
                                <PaginationLink className='cursor-pointer' isActive={index === pickedNumber.index} onClick={() => {
                                    dispatch(pickNumber({ index: id, offset: index !== 0 ? 50 : 0 }))
                                }}>{value}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </PaginationContent>
                </Pagination>
            </Suspense>
        </section>
    )
}

export default Home