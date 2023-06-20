import { createSlice } from '@reduxjs/toolkit'
import  TableUser  from '../TableData'

const tableSlice = createSlice({
    name:"tablelist",
    initialState:TableUser,
    reducers:{
        addTableUser: (state,action) => {
            state.push(action.payload)
        }
    }
})

export const { addTableUser } = tableSlice.actions
export default tableSlice.reducer;