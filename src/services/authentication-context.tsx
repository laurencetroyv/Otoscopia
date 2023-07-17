import React, { createContext, useEffect, useMemo, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { forgotRequest, signInRequest } from './authentication-service';

interface AuthenticationContextValues {
  isAuthenticated: boolean;
  isLoading: boolean;
  loggedInRequest: (email: string, password: string) => void;
  loggedInRequestError: string;
  forgotPasswordRequestError: string;
  forgotPasswordRequest: (email: string) => void;
}

const AuthenticationContextDefaultProps: AuthenticationContextValues = {
  isAuthenticated: false,
  isLoading: false,
  loggedInRequest: () => {},
  loggedInRequestError: '',
  forgotPasswordRequestError: '',
  forgotPasswordRequest: () => {},
};

export const AuthenticationContext = createContext(
  AuthenticationContextDefaultProps,
);

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

function AuthenticationProvider({
  children,
}: AuthenticationProviderProps): React.JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInRequestError, setLoggedInRequestError] = useState('');
  const [forgotPasswordRequestError, setForgotPasswordRequestError] =
    useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      if (userData !== null) {
        setUser(userData);
      }
      setInitializing(false);
    });
    return subscriber;
  }, [initializing]);

  //TODO Add timeout request
  function loggedInRequest(email: string, password: string) {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        setLoggedInRequestError(signInRequest(error));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function forgotPasswordRequest(email: string) {
    setIsLoading(true);
    auth()
      .sendPasswordResetEmail(email)
      .catch(error => {
        setForgotPasswordRequestError(forgotRequest(error));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const contextValue = useMemo(
    () => ({
      isAuthenticated: !!user,
      isLoading,
      loggedInRequest,
      loggedInRequestError,
      forgotPasswordRequest,
      forgotPasswordRequestError,
    }),
    [user, isLoading, loggedInRequestError, forgotPasswordRequestError],
  );
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
