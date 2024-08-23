
import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const runnerSlice = createSlice({

    name : 'runner',
    initialState : 100,
    reducers:{
        forward: (state) => state * 2
    }
})


export const {forward} = runnerSlice.actions
export default runnerSlice.reducer
