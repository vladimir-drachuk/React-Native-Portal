import { FC, ReactNode, useState } from 'react';
import {
  FlatList as RNFlatList,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';

import { Text } from '@/components/atomic/text';
import { View } from '@/components/atomic/view';

export interface Tab {
  key: string;
  tabName: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  data: Tab[];
  defaultActiveTab?: number;
}

export const Tabs: FC<TabsProps> = ({ data, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const { content } = data[activeTab] ?? {};

  return (
    <View>
      <RNFlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ key }) => key}
        contentContainerClassName="flex-grow justify-between"
        renderItem={({ item: { tabName }, index }) => (
          <RNTouchableOpacity
            className="px-4"
            onPress={() => setActiveTab(index)}
          >
            <Text
              variant="subtitle2"
              className={`py-3 ${index === activeTab ? 'color-brand-100 border-brand-100 border-b-2' : ''}`}
            >
              {tabName}
            </Text>
          </RNTouchableOpacity>
        )}
      />
      {content && <View type='scroll'>{content}</View>}
    </View>
  );
}
