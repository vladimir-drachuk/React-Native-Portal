import { FC, ReactNode } from 'react';
import { Formik, FormikConfig } from 'formik';

import { View } from '@/components/atomic/view';

export interface FormProps extends FormikConfig<Record<string, unknown>> {
  children: ReactNode;
};

export const Form: FC<FormProps> = ({ children, ...props }) => (
  <Formik {...props}>
    <View>
      {children}
    </View>    
  </Formik>
);
