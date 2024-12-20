import { useQuery, useMutation } from '@tanstack/react-query';

import { createUser, getUser } from '../db/user';
import { UserModel } from '../model';
import { useLazyQuery } from './utils/use-lazy-query';

const USER_KEY = 'user';

export const useGetUserQuery = (userId?: string) => useQuery({
  queryFn: async () => userId && getUser(userId),
  queryKey: [USER_KEY, { userId }],
});

export const useLazyGetUserQuery = () => useLazyQuery({
  initialData: undefined,
  queryFn: getUser,
  queryKey: [USER_KEY],
});

export const useCreateUserMutation = () => useMutation({
  mutationFn: (userInfo: UserModel) => createUser(userInfo),
  mutationKey: [USER_KEY],
});