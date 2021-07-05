import React, {useEffect} from 'react'
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import {createType} from '../../../Redux/typesDevices'
// import Button from '@material-ui/core/Button'
// import { Formik, Field, Form } from 'formik'
// import styles from './CreateType.module.scss'



// const CreateType: React.FC<PropsType> = ({createType}) => {

//     return (
//         <div className={styles.root}>
//             <h1>Создать тип устройства</h1>
//             <Formik
//        initialValues={{ name: ''}}
//         onSubmit={async (values, {resetForm}) => {
//           createType(values)
//           resetForm({values: ''})
//       }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <TextField type="text"
//              name="name"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.name}
//              variant="outlined"
//              required={true}
//              />
//            {/* <input
//              type="text"
//              name="name"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.name}
//            /> */}
//            <Button type="submit" >
//             submit
//            </Button>
           
//          </form>
//        )}
//      </Formik>
//         </div>
//     )
// }

// export default CreateType

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";


interface FormValues {
    type: string
}

interface OtherProps {}

interface MyFormProps {
    initialType?: string
    
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <div>
            <h1>Create type</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                
                  type="text"
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                />

                <button
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.type && touched.type) 
                    }
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

const CreateType = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        type: props.initialType || "",
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
    }),

    handleSubmit(
        { type}: FormValues,
        { props, setSubmitting, setErrors }
    ) {
      createType(type)
    }
})(InnerForm);

export default CreateType