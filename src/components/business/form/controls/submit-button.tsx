import { FC } from 'react';
import { useFormikContext } from 'formik';

import { Button, ButtonProps } from '@/components/atomic/button/button';

export const SubmitButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { submitForm } = useFormikContext();

  return (
    <Button
      {...props}
      onPress={submitForm}
    >
      {children}
    </Button>
  )
}