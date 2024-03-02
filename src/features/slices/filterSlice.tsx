import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { filter } from '@/types/types';

const initialState: filter = {
    productInput: '',
    productPrice: 0,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeProductName: (state, action: PayloadAction<string>) => {
            state.productInput = action.payload
        },

        changeProductPrice: (state, action: PayloadAction<number>) => {
            state.productPrice = action.payload
        },
    }
})

export const filterSelector = (state: RootState) => state.filter;

export const { changeProductName, changeProductPrice } = filterSlice.actions;
export default filterSlice.reducer;