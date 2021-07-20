import {configureStore} from '@reduxjs/toolkit';
import {UserSlice,CountSlice} from './Slices';

export const myStore =  configureStore({
    reducer:{
        counter:CountSlice,
        users:UserSlice
    }
});


