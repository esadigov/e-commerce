import React from 'react';
import { CustomButton } from '../CustomButton';
import { FormInput } from '../FormInput';

import './sign-up.scss';

export const SignUp = () => (
  <div className="sign-up">
    <h2 className="title">I do not have a account</h2>
    <span>Sign up with your email and password</span>
    <form className="sign-up-form" onSubmit={() => {}}>
      <FormInput
        type="text"
        name="displayName"
        value=""
        onChange={() => {}}
        label="Display Name"
        required
      />
      <FormInput
        type="email"
        name="email"
        value=""
        onChange={() => {}}
        label="Email"
        required
      />
      <FormInput
        type="password"
        name="password"
        value=""
        onChange={() => {}}
        label="Password"
        required
      />
      <FormInput
        type="password"
        name="confirmPassword"
        value=""
        onChange={() => {}}
        label="Confirm Password"
        required
      />
      <CustomButton type="submit">SIGN UP</CustomButton>
    </form>
  </div>
);
