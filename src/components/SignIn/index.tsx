import React from 'react';
import { CustomButton } from '../CustomButton';
import { FormInput } from '../FormInput';

import './sign-in.scss';

export const SignIn = () => {
  const [first, setfirst] = React.useState('');

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={() => {}}>
        <FormInput
          name="email"
          type="email"
          value=""
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value=""
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
};
