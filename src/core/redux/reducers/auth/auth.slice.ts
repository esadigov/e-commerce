import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AUTH_CHANGE_PAYLOAD, AUTH_PAGE, ILoginFields, IRegisterFields,
} from './const';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    page: AUTH_PAGE.SIGNIN,
    login_fields: {
      email: '',
      password: '',
    },
    register_fields: {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    },
  },
  reducers: {
    toggle: (state, action: PayloadAction<AUTH_PAGE>) => {
      state.page = action.payload;
    },
    updateLoginField: (
      state,
      action: PayloadAction<AUTH_CHANGE_PAYLOAD<keyof ILoginFields>>,
    ) => {
      state.login_fields = {
        ...state.login_fields,
        [action.payload.field]: action.payload.value,
      };
    },
    updateRegisterField: (
      state,
      action: PayloadAction<AUTH_CHANGE_PAYLOAD<keyof IRegisterFields>>,
    ) => {
      state.register_fields = {
        ...state.register_fields,
        [action.payload.field]: action.payload.value,
      };
    },
  },
});

export const { toggle, updateLoginField, updateRegisterField } = authSlice.actions;

export default authSlice.reducer;
