import { apiFetch } from '@/plugins/apiFetch'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// interface AvalibelAllTime {
//   date: string,
//   time: any[]
// }

interface AvalibelTimeState {
    data: any[],
    status: any,
    error: any
}


const initialState: AvalibelTimeState = { data: [{ date: '', time: []}], status: null, error: null }
 
export const fetchAvalibleAllTime = createAsyncThunk(
    'avalibleAllTime/fetchAvalibleAllTime',
    async () => {
        const res =  await apiFetch({ method: 'Get', path: `avalible-all-time`});
        return await res.json()
    }
)

const avalibleAllTimeSlice = createSlice({
  name: 'avalibleAllTime',
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
        builder.addCase(fetchAvalibleAllTime.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(fetchAvalibleAllTime.fulfilled, (state, action) => {
            state.status = 'resolve'
            state.data = action.payload
        })
        builder.addCase(fetchAvalibleAllTime.rejected, (state) => {
            state.status = 'reject'
            state.error = null
        })
    }
})

export default avalibleAllTimeSlice.reducer