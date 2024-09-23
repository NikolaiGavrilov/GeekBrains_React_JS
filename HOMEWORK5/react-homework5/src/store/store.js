import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './ThemeReducer'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})