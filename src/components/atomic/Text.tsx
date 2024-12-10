import { FC } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {};

export const Text: FC<TextProps> = (props) => <RNText {...props} />