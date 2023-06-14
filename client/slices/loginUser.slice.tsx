import { apiFetch } from '@/plugins/apiFetch'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dayjs, { Dayjs } from 'dayjs'

interface UserData {
  _id: number,
  email: string,
  hashedPassword: string,
  fullName: string,
  createdAt: Dayjs,
  updatedAt: Dayjs,
}

interface UserState {
    data: UserData,
    status: any,
    error: any
}


const initialState: UserState = { data: { _id: 0, email: '', hashedPassword: '', fullName: '', createdAt: dayjs(), updatedAt: dayjs()}, status: null, error: null }
 
export const fetchLoginUser = createAsyncThunk<UserData, object>(
    'loginUser/fetchLoginUser',
    async (params: any) => {        
        const res =  await apiFetch({ method: 'Post', path: `auth/login`, body: params});
        return await res.json()
    }
)

const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLoginUser.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
            state.status = 'resolve'
            state.data = action.payload
        })
        builder.addCase(fetchLoginUser.rejected, (state) => {
            state.status = 'reject'
            state.error = null
        })
    }
})

export default loginUserSlice.reducer