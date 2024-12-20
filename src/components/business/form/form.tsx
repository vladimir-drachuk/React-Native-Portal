import { FC, ReactNode } from 'react';
import { Formik, Form as FForm, FormikConfig } from 'formik';

export interface FormProps extends FormikConfig<Record<string, unknown>> {
  children: ReactNode;
};

export const Form: FC<FormProps> = ({ children, ...props }) => (
  <Formik {...props}>
    <FForm>
      {children}
    </FForm>
  </Formik>
);
