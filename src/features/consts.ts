import md5 from 'md5'

const password = 'Valantis';
const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
export const authString = md5(`${password}_${timestamp}`);

export const paginationList = [
    {
        id: 0,
        value: "1"
    },
    {
        id: 1,
        value: "2"
    }
]