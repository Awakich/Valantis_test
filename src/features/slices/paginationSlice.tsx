import { RootState } from '@/app/store';
import { pagination } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: pagination = {
    index: 0,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        pickNumber: (state, action: PayloadAction<number>) => {
            state.index = action.payload
        }
    }
})

export const paginationSelector = (state: RootState) => state.pagination.index

export const { pickNumber } = paginationSlice.actions;
export default paginationSlice.reducer;