import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    userData: (state, action) => {
      state.user = action.payload;
      state.push({ ...state.user });
      localStorage.setItem('user', JSON.stringify(state.user));
    }
  },
});

export const { userData } = userSlice.actions;
export default userSlice.reducer;