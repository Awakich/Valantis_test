import { ReactNode } from "react"

export type layout = {
    children: ReactNode
}

export type goods = {
    result: goodsDescription[]
}

export type goodsDescription = {
    brand: null | any
    id: string
    price: number
    product: string
}

export type pagination = {
    index: number
    offset: number
}

export type filter = {
    productInput: string
    productPrice: number
}