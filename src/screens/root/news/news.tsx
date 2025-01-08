import { FC } from 'react';

import { WithoutProps } from '@/types';
import { Tabs } from '@/components/atomic/tabs';

const DATA = [
  {
    key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    tabName: 'First Item',
    content: 'First Content',

  },
  {
    key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    tabName: 'Second Item',
    content: 'Second Content',
  },
  {
    key: '58694a0f-3da1-471f-bd96-145571e29d72',
    tabName: 'Third Item',
    content: 'Third Content',
  },
];

export const NewsScreen: FC<WithoutProps> = () => {
  return <Tabs data={DATA} />
};