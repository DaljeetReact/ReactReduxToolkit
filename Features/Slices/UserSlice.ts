import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import {UserData} from '../InterFaces';
import {fetchUsers} from '../Tunks/UserThunk';

const UserAdapter = createEntityAdapter<UserData>();

const usersSlice = createSlice({
  name: "users",
  initialState: UserAdapter.getInitialState({
    loading: false
  }),
  reducers: {
    AddUser:UserAdapter.addOne,
    AddUsers:UserAdapter.addMany
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      UserAdapter.setAll(state, action.payload);
      state.loading = false
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
    })
  }
});

export const {AddUser,AddUsers} = usersSlice.actions;
export default usersSlice.reducer