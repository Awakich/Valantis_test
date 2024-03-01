import { FC } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from 'react-router-dom'
import { goodsDescription } from '@/types/types'

const Item: FC<goodsDescription> = ({ brand, id, price, product }) => {
    return (
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
    )
}

export default Item