import { RootState } from '@/app/store';
import { pagination } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: pagination = {
    index: 0,
    offset: 0
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        pickNumber: (state, action: PayloadAction<pagination>) => {
            state.index = action.payload.index;
            state.offset = action.payload.offset
        }
    }
})

export const paginationSelector = (state: RootState) => state.pagination

export const { pickNumber } = paginationSlice.actions;
export default paginationSlice.reducer;