import { apiFetch } from '@/plugins/apiFetch'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dayjs, { Dayjs } from 'dayjs'

interface UserData {
  _id: number,
  email: string,
  hashedPassword: string,
  fullName: string,
  createdAt: number,
  updatedAt: Dayjs,
}

interface UserState {
    data: UserData,
    status: any,
    error: string | null
}


const initialState: UserState = { data: { _id: 0, email: '', hashedPassword: '', fullName: '', createdAt: 0, updatedAt: dayjs()}, status: null, error: null }
 
export const fetchLoginUser = createAsyncThunk<UserData, object, {rejectValue: string}>(
    'loginUser/fetchLoginUser',
    async (params, { rejectWithValue }) => {        
        const res =  await apiFetch({ method: 'Post', path: `auth/login`, body: params});
        const userData = await res.json();
        if(!res.ok) {
            return rejectWithValue('Error')
        }   

        localStorage.setItem('token', JSON.stringify(userData));
        return userData
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
            state.error = 'Error'
        })
    }
})

export default loginUserSlice.reducer