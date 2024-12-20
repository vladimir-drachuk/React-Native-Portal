import { FC } from 'react';
import { TextInput as RNTextInput, type TextInputProps as RNTextInputProps } from 'react-native';

import { View } from '@/components/atomic/view';
import { Text } from '@/components/atomic/text';
import { typography } from '@/theme/assets/typographies';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: false | string;
  helperText?: string;
};

export const TextInput: FC<TextInputProps> = ({ error, helperText, label, editable = true, className, ...props }) => (
  <View className={`relative mb-8 ${className}`}>
    {label && (
      <Text
        variant="input-label"
        className={error ? 'text-brand-100' : 'text-secondary-700'}
      >
        {label}
      </Text>
    )}
    <RNTextInput
      {...props}
      editable={editable}
      className={`rounded-[4px] p-2 border ${editable ? '': 'bg-brand-400'} ${error ? 'border-brand-100' : 'border-secondary-200'}`}
      style={{ ...typography['input-text'] }}
    />
    {(error || helperText) && (
      <Text
        variant="helper-text"
        className={`absolute top-14 ${error ? 'text-brand-100' : 'text-brand-600'}`}
      >
        {error || helperText}
      </Text>
    )}
  </View>
);