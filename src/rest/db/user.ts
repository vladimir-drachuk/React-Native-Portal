import { UserModel } from '../model';
import { dbService } from './db';

export const getUser = (userId: string) => dbService.getById<UserModel>('user', userId);

export const createUser = (userInfo: UserModel) => dbService.create('user', userInfo);