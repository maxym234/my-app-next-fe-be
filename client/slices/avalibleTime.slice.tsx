
import { apiFetch } from '@/plugins/apiFetch'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface AvalibelTime {
  date: string,
  time: any[]
}

interface AvalibelTimeState {
    data: AvalibelTime,
    status: any,
    error: any
}


const initialState: AvalibelTimeState = { data: { date: '', time: []}, status: null, error: null }
 
export const fetchAvalibleTime = createAsyncThunk<AvalibelTime, string>(
    'avalibleTime/fetchAvalibleTime',
    async (id) => {
        const res =  await apiFetch({ method: 'Get', path: `avalible-time/${id}`});
        return await res.json()
    }
)

const avalibleTimeSlice = createSlice({
  name: 'avalibleTime',
  initialState,
  reducers: {
    // increment(state) {
    //   state.data++
    // },
    // decrement(state) {
    //   state.data--
    // },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.data += action.payload
    // },
  },
    extraReducers: (builder) => {
        builder.addCase(fetchAvalibleTime.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(fetchAvalibleTime.fulfilled, (state, action) => {
            state.status = 'resolve'
            state.data = action.payload
        })
        builder.addCase(fetchAvalibleTime.rejected, (state) => {
            state.status = 'reject'
            state.error = null
        })
    }
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default avalibleTimeSlice.reducer