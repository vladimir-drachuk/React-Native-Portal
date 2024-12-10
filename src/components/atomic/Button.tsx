import { FC } from 'react';
import { Button as RNButton, type ButtonProps as RNButtonProps } from 'react-native';

export interface ButtonProps extends RNButtonProps {};

export const Button: FC<ButtonProps> = (props) => <RNButton {...props}/>;