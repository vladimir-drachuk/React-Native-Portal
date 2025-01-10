import { FC, ReactNode } from 'react';
import { Dimensions, ImageSourcePropType, TouchableOpacity as RNTouchableOpacity } from 'react-native';

import { DefaultViewProps, View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { Image } from '@/components/atomic/image';
import { Icon } from '@/components/atomic/icon';
import colors from '@/theme/assets/colors';

const { width } = Dimensions.get('window');

export interface CardProps extends DefaultViewProps {
  title?: ReactNode;
  subtitles?: ReactNode[];
  imageSrc?: ImageSourcePropType;
  description: ReactNode;
  likesAmount?: number;
  isLiked?: boolean;
  onCardPress?: () => void;
  onLikePress?: () => void;
}

export const Card: FC<CardProps> = ({
  title,
  subtitles,
  imageSrc,
  description,
  className = '',
  likesAmount, 
  isLiked,
  onLikePress,
  onCardPress,
  ...props
}) => (
  <RNTouchableOpacity
    {...props}
    onPress={onCardPress}
    className={`bg-brand-200 py-6 px-4 ${className}`}
  >
    {title && (
      <Text
        variant="h5-medium"
        className="uppercase mb-4"
      >
        {title}
      </Text>
    )}
    {subtitles && (
      <View className="mb-4">
        {subtitles.map((subtitle, index) => (
          <Text
            key={index}
            variant="helper-text"
            className="color-secondary-400"
          >
            {subtitle}
          </Text>
        ))}
      </View>
    )}
    {imageSrc && (
      <View className="mb-4">
        <Image
          source={imageSrc}
          resizeMode="contain"
          style={{ width, height: width * 0.6 }}
        />
      </View>
    )}
    <Text className="mb-6">{description}</Text>
    <RNTouchableOpacity
      className='flex flex-row items-center gap-1'
      onPress={onLikePress}
    >
      {!!likesAmount && (
        <Text className={isLiked ? 'text-brand-100' : 'text-secondary-300'}>
          {likesAmount}
        </Text>
      )}
      <Icon
        type="like"
        size="small"
        color={isLiked ? colors.brand[100] : colors.secondary[300]}
      />
    </RNTouchableOpacity>
  </RNTouchableOpacity>
);