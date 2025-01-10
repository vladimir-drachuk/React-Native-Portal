export interface NewsModel {
  id: string;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  isLiked: boolean;
  likesAmount: number;
  type: NewsType;
}

export enum NewsType {
  EVENTS = 'events',
  NEWCOMERS = 'newcomers',
  LIFE = 'life',
}