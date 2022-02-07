import React from 'react';
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks';
import {
  AUTH_PAGE, IRegisterFields, toggle, updateRegisterField,
} from '../../core/redux/reducers/auth.slice';
import { CustomButton } from '../CustomButton';
import { FormInput } from '../FormInput';

import './sign-up.scss';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.auth.register_fields);

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown }>,
    field: keyof IRegisterFields,
  ) => {
    dispatch(updateRegisterField({ field, value: e.target.value as string }));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={() => {}}>
        <FormInput
          type="text"
          name="displayName"
          value={fields.displayName}
          onChange={(e) => handleChange(e, 'displayName')}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={fields.email}
          onChange={(e) => handleChange(e, 'email')}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={fields.password}
          onChange={(e) => handleChange(e, 'password')}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={fields.confirmPassword}
          onChange={(e) => handleChange(e, 'confirmPassword')}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
        <span
          className="no-account"
          role="none"
          onClick={() => dispatch(toggle(AUTH_PAGE.SIGNIN))}
          onKeyDown={() => {}}
        >
          Already have an account?
        </span>
      </form>
    </div>
  );
};
