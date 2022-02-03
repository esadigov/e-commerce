import React from 'react';
import { SignIn } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';

import './auth-page.scss';

export const AuthPage = () => {
  const [display, setDisplay] = React.useState(false);

  return (
    <div className="auth">
      {display ? <SignIn /> : <SignUp />}
      <button type="button" onClick={() => setDisplay(!display)}>
        {display ? 'signup' : 'signin'}
      </button>
    </div>
  );
};
