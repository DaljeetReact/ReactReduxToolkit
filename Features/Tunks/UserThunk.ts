import { createAsyncThunk } from '@reduxjs/toolkit';
import {UserData} from '../InterFaces';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://reqres.in/api/users?delay=1');
    return (await response.json()).data as UserData[];
});