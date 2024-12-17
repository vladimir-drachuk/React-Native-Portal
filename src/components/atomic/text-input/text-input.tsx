import { FC } from 'react';
import { TextInput as RNTextInput, type TextInputProps as RNTextInputProps } from 'react-native';
import { View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: false | string;
};

export const TextInput: FC<TextInputProps> = ({ error, label, ...props }) => (
  <View>
    {label && <Text>{label}</Text>}
    <RNTextInput {...props} />
    {error && <Text>{error}</Text>}
  </View>
);