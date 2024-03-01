import { goods } from "@/types/types"
import { useState, useEffect } from "react"
import { authString } from '@/features/consts'
import axios from "axios"

export const useItems = (ids: string[]) => {
    const [items, setItems] = useState<goods>({ result: [] })

    useEffect(() => {
        const requestData = {
            "action": "get_items",
            "params": { "ids": ids }
        }

        const config = {
            headers: {
                'X-Auth': authString,
            },
        };

        const getGoods = async () => {
            try {
                const response = await axios.post('https://api.valantis.store:41000/', requestData, config)
                setItems(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        if (ids.length > 0) {
            getGoods()
        }

    }, [ids])

    return items.result;
}