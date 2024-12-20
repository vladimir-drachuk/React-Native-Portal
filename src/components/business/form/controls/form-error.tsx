import { FC } from 'react';
import { useFormikContext } from 'formik';

import { Error, ErrorProps } from '@/components/atomic/error';
import { FormFields } from '../constants';

export const FormError: FC<Omit<ErrorProps, 'children'>> = (props) => {
  const { errors } = useFormikContext<Record<FormFields, unknown>>();
  const errorText = errors[FormFields.COMMON];

  return errorText && <Error {...props}>{errorText}</Error>;
};