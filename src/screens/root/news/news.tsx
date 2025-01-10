import { FC, useMemo } from 'react';

import { WithoutProps } from '@/types';
import { Tabs } from '@/components/atomic/tabs';
import { NewsType } from '@/rest/model';
import { useGetNewsQuery } from '@/rest/query';
import { LoadingContainer } from '@/components/layouts/loading-container';
import { getNewsList } from './news-list';

export const NewsScreen: FC<WithoutProps> = () => {
  const { data, isLoading } = useGetNewsQuery();

  const tabsData = useMemo(() => data ? [
    {
      key: 'all-news',
      tabName: 'All news',
      content: getNewsList(data),
    },
    {
      key: NewsType.EVENTS,
      tabName: 'Events',
      content: getNewsList(data.filter(({ type }) => type === NewsType.EVENTS)),
    },
    {
      key: NewsType.NEWCOMERS,
      tabName: 'Newcomers',
      content: getNewsList(data.filter(({ type }) => type === NewsType.NEWCOMERS)),
    },
    {
      key: NewsType.LIFE,
      tabName: 'Company’s Life ',
      content: getNewsList(data.filter(({ type }) => type === NewsType.LIFE)),
    },
  ] : [], [data]);

  return (
    <LoadingContainer isLoading={isLoading}>
      <Tabs data={tabsData} />
    </LoadingContainer>
  );
};
