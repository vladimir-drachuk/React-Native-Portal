
import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';

import { Card } from '@/components/atomic/card';
import { Text } from '@/components/atomic/text';
import { NewsModel } from '@/rest/model';
import { useUpdateNewsMutation } from '@/rest/query';

export interface NewsCardProps extends NewsModel {}

export const NewsCard: FC<NewsCardProps> = ({ id, date, image, author, isLiked, likesAmount, ...props }) => {
  const { mutateAsync } = useUpdateNewsMutation();

  const handleLikesUpdate = async (id: string, amount: number, currentStatus: boolean) => {
    const newStatus = !currentStatus;
    const newAmount = newStatus ? amount + 1 : amount - 1;

    await mutateAsync({ id, isLiked: newStatus, likesAmount: newAmount });
  };

  return (
    <Card
      isLiked={isLiked}
      likesAmount={likesAmount}
      imageSrc={image as ImageSourcePropType}
      subtitles={[
        <>Written by <Text variant="helper-text" className="underline">{author}</Text></>,
        date,
      ]}
      onLikePress={() => handleLikesUpdate(id, likesAmount, isLiked)}
      {...props}   
    />
  );
};