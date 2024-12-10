import { FC } from 'react';
import { TextInput as RNTextInput, type TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInputProps extends RNTextInputProps {};

export const TextInput: FC<TextInputProps> = (props) => <RNTextInput {...props} />