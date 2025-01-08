import { FC } from 'react';
import {
  View as RNView,
  ScrollView as RNScrollView,
  type ViewProps as RNViewProps,
  type ScrollViewProps as RNScrollViewProps,
} from 'react-native';

export interface DefaultViewProps extends RNViewProps {};

export interface ScrollViewProps extends RNScrollViewProps {};

export type ViewProps =
  ({ type?: 'default' } & DefaultViewProps) |
  ({ type: 'scroll' } & ScrollViewProps);

export const View: FC<ViewProps> = ({ type = 'default', ...props }) => type === 'default'
  ? <RNView {...props as DefaultViewProps} />
  : <RNScrollView {...props as ScrollViewProps} />