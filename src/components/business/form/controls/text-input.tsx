import { FC } from 'react';
import { useField, useFormikContext } from 'formik';

import { TextInput as BaseTextInput, TextInputProps } from '../../../atomic/text-input/text-input';

export const TextInput: FC<TextInputProps & { name: string }> = ({ name, editable = true, ...props }) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  const { touched, error } = meta;
  const { onChange, onBlur } = field;

  return (
    <BaseTextInput
      {...field}
      {...props}
      id={name}
      editable={!isSubmitting && editable}
      onChangeText={onChange(name)}
      onBlur={onBlur(name)}
      error={touched && error}
    />
  );
};