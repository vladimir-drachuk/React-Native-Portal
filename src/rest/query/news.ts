import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getNews, updateNews } from '../db/news';
import { NewsModel } from '../model';

const NEWS_KEY = 'news';

export const useGetNewsQuery = () => useQuery({
  queryFn: getNews,
  queryKey: [NEWS_KEY],
});

export const useUpdateNewsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newsInfo: { id: string } & Partial<NewsModel>) => updateNews(newsInfo),
    onMutate: async (newNews) => {
      await queryClient.cancelQueries({ queryKey: [NEWS_KEY] });

      const previousNews = queryClient.getQueryData([NEWS_KEY]) as NewsModel[];
      const itemIndex = previousNews.findIndex(({ id }) => id === newNews.id);
      const newNewsList = Array.from(previousNews);

      if (newNewsList[itemIndex]) {
        newNewsList[itemIndex] = { ...newNewsList[itemIndex], ...newNews };
      }
    
      queryClient.setQueryData([NEWS_KEY],  newNewsList);

      return { previousNews };
    },
    onError: (_, __, context) => {
      context && queryClient.setQueryData([NEWS_KEY], context.previousNews);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: NEWS_KEY })
    },
    mutationKey: [NEWS_KEY],
  })
};