import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from '@/features/slices/paginationSlice'
import filterReducer from '@/features/slices/filterSlice'

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        filter: filterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch