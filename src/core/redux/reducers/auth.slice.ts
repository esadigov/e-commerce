import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AUTH_PAGE {
  SIGNIN,
  SIGNUP,
}

export interface AUTH_CHANGE_PAYLOAD<FIELD_TYPE> {
  field: FIELD_TYPE;
  value: string;
}

export interface ILoginFields {
  email: string;
  password: string;
}

export interface IRegisterFields {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
}

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
