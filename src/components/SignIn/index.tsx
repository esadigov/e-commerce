import React from 'react';
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks';
import { CustomButton } from '../CustomButton';
import { FormInput } from '../FormInput';

import {
  AUTH_PAGE,
  ILoginFields,
  toggle,
  updateLoginField,
} from '../../core/redux/reducers/auth.slice';

import './sign-in.scss';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.auth.login_fields);

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown }>,
    field: keyof ILoginFields,
  ) => {
    dispatch(updateLoginField({ field, value: e.target.value as string }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={() => {}}>
        <FormInput
          name="email"
          type="email"
          value={fields.email}
          onChange={(e) => handleChange(e, 'email')}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={fields.password}
          onChange={(e) => handleChange(e, 'password')}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
        <span
          className="no-account"
          role="none"
          onClick={() => dispatch(toggle(AUTH_PAGE.SIGNUP))}
          onKeyDown={() => {}}
        >
          Do not have an account? Sign up
        </span>
      </form>
    </div>
  );
};
