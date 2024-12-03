import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {};

export const Text = (props: TextProps) => <RNText {...props} />