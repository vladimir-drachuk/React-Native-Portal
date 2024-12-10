import { FC } from 'react';
import { View as RNView, type ViewProps as RNViewProps } from 'react-native';

export interface ViewProps extends RNViewProps {};

export const View: FC<ViewProps> = (props) => <RNView {...props} />