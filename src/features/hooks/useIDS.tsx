import { useState, useEffect } from "react";
import md5 from 'md5'
import axios from 'axios'
import { ids } from "@/types/types";

export const useIDS = () => {
    const [goods, setGoods] = useState<ids>({ result: [] })

    const password = 'Valantis';
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const authString = md5(`${password}_${timestamp}`);

    const requestData = {
        "action": "get_ids",
        "params": { "limit": 10 }
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
                setGoods(response.data)
            }

            getGoods()
        }, [])
    } catch (error: any) {
        console.log(error)
    }

    return goods.result;
}