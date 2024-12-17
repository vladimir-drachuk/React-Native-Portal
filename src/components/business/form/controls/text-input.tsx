import { FC } from 'react';
import { useField } from 'formik';

import { TextInput as BaseTextInput, TextInputProps } from '../../../atomic/text-input/text-input';

export const TextInput: FC<TextInputProps & { name: string }> = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const { touched, error } = meta;
  const { onChange, onBlur } = field;

  return (
    <BaseTextInput
      {...field}
      {...props}
      id={name}
      onChangeText={onChange(name)}
      onBlur={onBlur(name)}
      error={touched && error}
    />
  );
};