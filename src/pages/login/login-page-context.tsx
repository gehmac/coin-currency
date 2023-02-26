import { createContext, useContext, useState } from 'react';

type LoginPageProviderProps = {
  children: React.ReactNode;
};

type LoginCredentials = {
  login: string;
  password: string;
};

type ContextProps = {
  isLoading: boolean;
  credentials?: LoginCredentials;
};

const loginPageContext = createContext<ContextProps>({} as ContextProps);

const useLoginPageContext = (): ContextProps => {
  const context = useContext(loginPageContext);

  if (!context) {
    throw new Error('CommentsContext must be used within an CommentsPageProvider');
  }
  return context;
};

const LoginPageProvider = ({ children }: LoginPageProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<LoginCredentials>();

  return (
    <loginPageContext.Provider
      value={{
        isLoading,
        credentials,
      }}>
      {children}
    </loginPageContext.Provider>
  );
};

export { useLoginPageContext, LoginPageProvider };
