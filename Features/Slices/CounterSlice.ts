import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {initStatesCounter} from '../InitStates'
const CountSlice = createSlice({
    name:"counter",
    initialState:initStatesCounter,
    reducers:{
        increment(state,acion:PayloadAction<number>){
            state.value +=1 
        },
        decrement(state,acion:PayloadAction<number>){
            state.value -=1 
        }

    }
})

export const { increment,decrement} = CountSlice.actions;

export default CountSlice.reducer;