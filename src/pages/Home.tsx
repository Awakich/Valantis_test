import Loading from '@/components/Loading'
import { useIDS } from '@/features/hooks/useIDS'
import { useItems } from '@/features/hooks/useItems'
import { goodsDescription } from '@/types/types'
import { FC, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from 'react-router-dom'

const Home: FC = () => {
    const ids: string[] = useIDS()
    const items: goodsDescription[] = useItems(ids)

    const filteredItems = items.filter((item, index, self) => {
        return index === self.findIndex((i) => i.id === item.id);
    });

    if (!ids) return <Loading />

    return (
        <section className='flex flex-col'>
            <h2 className='font-semibold text-2xl'>Товары</h2>
            <Suspense fallback={<Loading />}>
                <div className='grid grid-cols-3 items-center justify-center gap-8'>
                    {filteredItems && filteredItems.map(({ brand, id, price, product }) => (
                        <Card key={id} className='shadow h-full'>
                            <CardHeader className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <CardTitle>{product}</CardTitle>
                                    <CardDescription>{`Бренд ${brand ? brand : 'не найден'}`}</CardDescription>
                                </div>

                                <p className='text-xl font-bold'>{price}₽</p>

                            </CardHeader>
                            <CardFooter>
                                <Button variant={"default"}>
                                    <Link to={`/${id}`}>
                                        Купить сейчас
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Suspense>
        </section>
    )
}

export default Home