import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useItems } from '@/features/hooks/useItems'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Good: FC = () => {
    const { pathname } = useLocation()
    const good = useItems([pathname.slice(1)])

    return (
        <section>
            <h3 className='font-semibold text-2xl'>Вы получили товар</h3>
            <Card>
                <CardHeader>
                    <CardTitle>{`Его название: ${good[0]?.product ? good[0]?.product : 'загрузка...'}`}</CardTitle>
                    <CardDescription>{`Бренд: ${good[0]?.brand ? good[0]?.brand : 'не найден'}`}</CardDescription>
                </CardHeader>

                <CardContent>
                    <p>{`Его цена: ${good[0]?.price ? good[0]?.price : 'загрузка...'}`}</p>
                    <p>{`Его артикул: ${good[0]?.id ? good[0]?.id : 'загрузка...'}`}</p>
                </CardContent>

                <CardFooter>
                    <Button variant={"default"}>
                        <Link to={'/'}>
                            Вернуться назад
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </section>
    )
}

export default Good