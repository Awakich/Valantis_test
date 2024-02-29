import { goods } from "@/types/types"
import { useState, useEffect } from "react"
import { authString } from '@/features/consts'
import axios from "axios"

export const useItems = (ids: string[]) => {
    const [items, setItems] = useState<goods>({ result: [] })

    const requestData = {
        "action": "get_items",
        "params": { "ids": ids }
    }

    const config = {
        headers: {
            'X-Auth': authString,
        },
    };

    try {
        useEffect(() => {
            const getGoods = async () => {
                const response = await axios.post('https://api.valantis.store:41000/', requestData, config);
                setItems(response.data)
            }

            getGoods()
        }, [])
    } catch (error: any) {
        console.log(error)
    }

    return items.result;
}