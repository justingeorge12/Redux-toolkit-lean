
import { createSlice } from "@reduxjs/toolkit";

const flySlice = createSlice({
    name : 'move',
    initialState : 20,
    reducers: {
        move : (state) => state + 10
    }
})

export const {move} = flySlice.actions
export default flySlice.reducer