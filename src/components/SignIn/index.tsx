import React from 'react';
import { useAppDispatch } from '../../core/redux/hooks';
import { CustomButton } from '../CustomButton';
import { FormInput } from '../FormInput';

import { AUTH_PAGE, toggle } from '../../core/redux/reducers/auth.slice';

import './sign-in.scss';

export const SignIn = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={() => {}}>
        <FormInput name="email" type="email" value="" label="email" required />
        <FormInput
          name="password"
          type="password"
          value=""
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
