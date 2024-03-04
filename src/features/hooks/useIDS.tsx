import { useState, useEffect } from "react";
import { authString } from "../consts";
import axios from 'axios'


export const useIDS = (offset: number) => {
    const [goods, setGoods] = useState<{ result: string[] }>({ result: [] })

    const requestData = {
        "action": "get_ids",
        "params": { "limit": 50, "offset": offset }
    }


    const config = {
        headers: {
            'X-Auth': authString,
        },
    };

    const getGoods = async () => {
        try {
            const response = await axios.post('https://api.valantis.store:41000/', requestData, config);
            setGoods(response.data)
        } catch (error) {
            getGoods()
        }
    }

    useEffect(() => {
        getGoods()
        const handlePopState = () => {
            getGoods()
        }

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };

    }, [])

    return goods.result
}