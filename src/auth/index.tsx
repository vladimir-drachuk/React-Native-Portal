import { createContext, FC, useContext, useState } from 'react';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import { initializeFirebaseApp } from '@/firebase';
import { BaseComponentProps } from '@/types/props';

interface AuthContextModel {
  user: string | null;
  isLoading: boolean;
  signUp(): void;
  logIn(): void;
  logOut(): void;
}

initializeFirebaseApp();
const auth = getAuth();

const AuthContext = createContext<AuthContextModel>({
  user: null,
  isLoading: false,
  signUp: () => {},
  logIn: () => {},
  logOut: () => {}
});

const { Provider } = AuthContext;

export const AuthProvider: FC<BaseComponentProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const signUp = async () => {
    if (user) return;

    try {
      setLoading(true);

      const { user: newUser } = await createUserWithEmailAndPassword(auth, 'valera@mail.ru', '123456');

      setUser(newUser.displayName);
    } finally {
      setLoading(false);
    }
  }

  const logIn = async () => {
    if (user) return;

    try {
      setLoading(true);

      const { user: loggedUser } = await signInWithEmailAndPassword(auth, 'valera@mail.ru', '123456');

      setUser(loggedUser.displayName);
    } finally {
      setLoading(false);
    }
  }

  const logOut = () => {}

  return <Provider value={{ user, isLoading, signUp, logIn, logOut }}>{children}</Provider>;
};

export const useAuth = () => useContext(AuthContext);