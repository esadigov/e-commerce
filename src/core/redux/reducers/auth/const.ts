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
