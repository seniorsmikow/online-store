import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import styles from './RegistrationForm.module.scss'

interface Values {
  email: string;
  password: string
}

type PropsType = {
    isReg: boolean
    userRegistration: (email: string, password: string) => void
}

const RegistrationForm: React.FC<PropsType> = props => {
  return (
    <div className={styles.root}>
      <h1>Registration</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          props.userRegistration(values.email, values.password);
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" type="email"/>

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" type="password"/>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm