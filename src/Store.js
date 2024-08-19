import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './reducer/ProductSlice'

export const store = configureStore({
  reducer: {
    cartList:ProductSlice,
  },
})