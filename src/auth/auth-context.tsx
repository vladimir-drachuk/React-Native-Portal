import { createContext, FC, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential
} from 'firebase/auth';

import { initializeFirebaseApp } from '@/firebase';
import { BaseComponentProps } from '@/types';
import { useCreateUserMutation, useLazyGetUserQuery } from '@/rest/query';
import { UserAuthModel, UserModel } from '@/rest/model';

type AuthProps = Omit<UserModel, 'id'> & UserAuthModel;
type UserProps = UserModel;

interface AuthContextProps {
  user: UserProps | null;
  isInitialized: boolean;
  signUp(data: AuthProps): Promise<void>;
  logIn(data: UserAuthModel): Promise<UserCredential>;
  logOut(): Promise<void>;
}

initializeFirebaseApp();
const auth = getAuth();

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isInitialized: false,
  signUp: async () => {},
  logIn: async () => ({}) as UserCredential,
  logOut: async () => {}
});

const { Provider } = AuthContext;

export const AuthProvider: FC<BaseComponentProps> = ({ children }) => {
  const [getUserFromDb] = useLazyGetUserQuery();
  const { mutateAsync: saveUserToDb } = useCreateUserMutation();
  const [user, setUser] = useState<UserProps | null>(null);
  const [isInitialized, setInitialized] = useState(false);

  const signUp = async ({ firstName, lastName, email, password }: AuthProps) => {
    if (user) return;

    const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password);

    if (newUser) {
      const id = newUser.uid;

      await saveUserToDb({ id, firstName, lastName });
    }
  }
  const logIn = ({ email, password }: UserAuthModel) => signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  useEffect(() => onAuthStateChanged(auth, async (loggedUser) => {
    if (loggedUser) {
      const result = await getUserFromDb(loggedUser.uid);

      if (result) {
        const { firstName, lastName } = result;
  
        setUser({ firstName, lastName, id: loggedUser.uid });
        setInitialized(true);

      }
    } else {
      setUser(null);
      setInitialized(true);
    }
  }), []);

  return (
    <Provider
      value={{
        user,
        isInitialized,
        signUp,
        logIn,
        logOut
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuth = () => useContext(AuthContext);