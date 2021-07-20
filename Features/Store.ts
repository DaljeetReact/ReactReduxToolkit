import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './Slices/CounterSlice';

export const myStore =  configureStore({
    reducer:{
        counter:CounterReducer
    }
});


