import { createSlice} from "@reduxjs/toolkit";
import {UserData} from '../InterFaces';


const SagaUsersSlice = createSlice({
  name: "saga",
  initialState: {
      users:undefined
  },
  reducers: {
    GetUser:(state,actions)=>{
        state
    },
    SetUser:(state,actions)=>{
        state.users = actions.payload
    }
  }
});

export const  {SetUser,GetUser} = SagaUsersSlice.actions;

export default SagaUsersSlice.reducer