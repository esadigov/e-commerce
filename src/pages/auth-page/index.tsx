import React from 'react';
import { SignIn } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';

import { useAppSelector } from '../../core/redux/hooks';
import { AUTH_PAGE } from '../../core/redux/reducers/auth/const';

import './auth-page.scss';

export const AuthPage = () => {
  const page = useAppSelector((state) => state.auth.page);

  return (
    <div className="auth">
      {page === AUTH_PAGE.SIGNIN ? <SignIn /> : <SignUp />}
    </div>
  );
};
