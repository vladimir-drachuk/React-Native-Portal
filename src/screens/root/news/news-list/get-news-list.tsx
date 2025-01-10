import { NewsModel } from '@/rest/model';
import { NewsCard } from './news-card';

export const getNewsList = (list: NewsModel[]) => (
  <>
    {list.map(({ id, ...props }) => (
      <NewsCard
        key={id}
        id={id}
        {...props}   
      />
    ))}
  </>
);