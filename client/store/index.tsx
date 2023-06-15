import { configureStore } from '@reduxjs/toolkit'
import  avalibleTimeSlice from '../slices/avalibleTimeByDate.slice'
import  avalibleAllTimeSlice from '../slices/avalibleAllTime.slice'
import loginUserSlice from '@/slices/loginUser.slice'

export const store = configureStore({
  reducer: {
    avalibleTimeSlice,
    avalibleAllTimeSlice,
    loginUserSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch