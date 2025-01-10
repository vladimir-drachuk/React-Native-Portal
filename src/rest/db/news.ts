import { NewsModel } from '../model';
import { dbService } from './db';

export const getNews = () => dbService.getAll<NewsModel>('news');

export const updateNews = (data: { id: string } & Partial<NewsModel>) => dbService.update('news', data);