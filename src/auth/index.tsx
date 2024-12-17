import { createContext, FC, useContext, useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import { initializeFirebaseApp } from '@/firebase';
import { BaseComponentProps } from '@/types';
import { useCreateUserMutation, useGetUserQuery } from '@/rest/query';

interface AuthContextProps {
  user: string | null;
  isLoading: boolean;
  signUp(mail: string, password: string): Promise<void>;
  logIn(): Promise<void>;
  logOut(): void;
}

initializeFirebaseApp();
const auth = getAuth();

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: false,
  signUp: async () => {},
  logIn: async () => {},
  logOut: () => {}
});

const { Provider } = AuthContext;

export const AuthProvider: FC<BaseComponentProps> = ({ children }) => {
  const {} = useGetUserQuery()
  const { mutate: saveUserToDb, isPending } = useCreateUserMutation();
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isLoading = loading || isPending;

  const signUp = async (mail: string, password: string) => {
    if (user) return;

    try {
      setLoading(true);

      const { user: newUser } = await createUserWithEmailAndPassword(auth, mail, password);
      const name = newUser.email ?? ''

      saveUserToDb({ id: newUser.uid, name })

      setUser(name);
    } finally {
      setLoading(false);
    }
  }

  const logIn = async () => {
    if (user) return;

    try {
      setLoading(true);

      const { user: loggedUser } = await signInWithEmailAndPassword(auth, 'valera@mail.ru', '123456');
      console.log({ loggedUser });
      setUser(loggedUser.displayName);
    } finally {
      setLoading(false);
    }
  }

  const logOut = () => {}

  return <Provider value={{ user, isLoading, signUp, logIn, logOut }}>{children}</Provider>;
};

export const useAuth = () => useContext(AuthContext);