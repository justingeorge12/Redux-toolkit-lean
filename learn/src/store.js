
import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './reducers/itemSlice' 
import counterReducer from './reducers/counterSlice'
import runnerreducer from './reducers/runnerSlice'
import flyreducer from './reducers/flySlice'

const store = configureStore({
    reducer:{
        items: itemsReducer,
        counter: counterReducer,
        runner: runnerreducer,
        fly : flyreducer
    }
})

export default store
