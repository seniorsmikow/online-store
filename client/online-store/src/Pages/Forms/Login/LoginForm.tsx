import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import styles from './LoginForm.module.scss'
import Button from '../../../components/Button/Button'

interface Values {
  email: string;
  password: string
}

type PropsType = {
  userLogin: (email: string, password: string) => void
  handleClose: () => void
}

const LoginForm: React.FC <PropsType> = ({userLogin, handleClose}) => {
  return (
    <div className={styles.root}>
      {/* <h1>Login</h1> */}
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
         
            userLogin(values.email, values.password)
            handleClose()
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" type="email" autoComplete="on"/>

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" type="password" autoComplete="on"/>

          <Button text="Login" style={{width: '80px', backgroundColor: '#667e9a', color: 'white', fontSize: '12px'}}>
            <button type="submit"></button>
          </Button>
        </Form>
      </Formik>
    </div>
  );
};


export default LoginForm