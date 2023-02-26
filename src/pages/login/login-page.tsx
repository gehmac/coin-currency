import React from 'react';
import { LoginPageProvider } from './login-page-context';
import { LoginPageContent } from './login-page-content';

function LoginPage(): JSX.Element {
  return (
    <LoginPageProvider>
      <LoginPageContent />
    </LoginPageProvider>
  );
}

export default LoginPage;
