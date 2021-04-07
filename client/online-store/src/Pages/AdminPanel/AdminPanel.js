import React from 'react'
import {AppStateType} from '../../Redux/store'
import {connect} from 'react-redux'
import {createDevice} from '../../Redux/devices'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import styles from './AdminPanel.module.scss'

// interface Values {
//     name: string;
//     price: number,
//     img: string,
//     typeId: number,
//     brandId: number
// }  

// type PropsType = {
//     devices: any
//     createDevice: () => void
// }


const AdminPanel= props => {


    return (
        <div className={styles.root}>
            <h1>Create device</h1>
            <Formik
            initialValues={{
                name: '',
                price: 0,
                img: '',
                typeId: 0,
                brandId: 0
            }}
            onSubmit={async (values) => {
                props.createDevice(values)
              }}
            >
                <div className={styles.admin__form}>
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="apple" />

                        <label htmlFor="price">Price</label>
                        <Field id="price" name="price" placeholder="1000" />

                        <label htmlFor="img">img</label>
                        <Field id="img" name="img" placeholder="" type="file"/>

                        <label htmlFor="typeId">typeId</label>
                        <Field id="typeId" name="typeId" placeholder="1" />

                        <label htmlFor="brandId">brandId</label>
                        <Field id="brandId" name="brandId" placeholder="2" />

                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        devices: state.devices.devices
    }
}

export default connect(mapStateToProps, {createDevice})(AdminPanel)