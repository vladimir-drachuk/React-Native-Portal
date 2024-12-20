import { FC } from 'react';
import { useFormikContext } from 'formik';

import { Button, ButtonProps } from '@/components/atomic/button/button';

export const SubmitButton: FC<ButtonProps> = ({ children, disabled, ...props }) => {
  const { submitForm, isSubmitting } = useFormikContext();

  return (
    <Button
      {...props}
      disabled={isSubmitting || disabled}
      onPress={submitForm}
    >
      {children}
    </Button>
  )
}