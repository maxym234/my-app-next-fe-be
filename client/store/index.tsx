import { configureStore } from '@reduxjs/toolkit'
import  avalibleTimeSlice from '../slices/avalibleTimeByDate.slice'
import  avalibleAllTimeSlice from '../slices/avalibleAllTime.slice'

export const store = configureStore({
  reducer: {
    avalibleTimeSlice,
    avalibleAllTimeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch