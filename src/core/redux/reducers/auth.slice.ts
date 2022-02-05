import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AUTH_PAGE {
  SIGNIN,
  SIGNUP
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    page: AUTH_PAGE.SIGNIN,
  },
  reducers: {
    toggle: (state, action: PayloadAction<AUTH_PAGE>) => {
      // eslint-disable-next-line no-param-reassign
      state.page = action.payload;
    },
  },
});

export const { toggle } = authSlice.actions;

export default authSlice.reducer;
