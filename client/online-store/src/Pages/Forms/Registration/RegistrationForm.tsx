import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import styles from './RegistrationForm.module.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2),
        width: '40ch',
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
);

interface Values {
  email: string;
  password: string
  name: string
}

type PropsType = {
  userRegistration: (email: string, password: string, name: string) => void
}

const RegistrationForm: React.FC <PropsType> = ({userRegistration}) => {

  const classes = useStyles()

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
         
            userRegistration(values.email, values.password, values.name)
        }}
      >
        <Form className={classes.root} noValidate autoComplete="off">
          <h1>Регистрация</h1>
          <TextField variant="outlined" label="Email" type="email"autoComplete="on">
            <Field id="email"/>
          </TextField>
          <TextField label="Password" variant="outlined" type="password" autoComplete="on">
            <Field id="password"/>
          </TextField>
          <TextField label="Name" variant="outlined" type="text" autoComplete="on">
            <Field id="name"/>
          </TextField>

          <Button variant="contained" color="primary" type="submit">
            Регистрация
          </Button>
        </Form>
      </Formik>
    </div>
  );
};


export default RegistrationForm