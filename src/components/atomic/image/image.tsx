import { FC } from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';

export interface ImageProps extends RNImageProps {}

export const Image: FC<ImageProps> = (props) => <RNImage {...props} />