import React, {useEffect} from 'react'
import {AppStateType} from '../../Redux/store'
import {connect} from 'react-redux'
import {createDevice} from '../../Redux/devices'
import {createBrand, fetchAllBrands} from '../../Redux/brands'
import {createType, fetchTypesDevices} from '../../Redux/typesDevices'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import styles from './AdminPanel.module.scss'
import { fetchAllBrandsAPI } from '../../axios/brandsAPI'

const AdminPanel= props => {

    const fetchTypesDevices = props.fetchTypesDevices;
    const fetchAllBrands = props.fetchAllBrands;

    useEffect(() => {
        fetchTypesDevices();
        fetchAllBrands();
    }, [fetchTypesDevices,fetchAllBrands]);

    return (
        <div className={styles.root}>
            <h1>Create device</h1>
            <Formik
                initialValues={{
                    name: '',
                    price: 0,
                    img: '',
                    brandId: 0,
                    typeId: 0
                }}
                onSubmit={async (values) => {
                    debugger
                    props.createDevice(values)
                }}
            >
            {(formProps) => (
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="apple" />

                    <label htmlFor="price">Price</label>
                    <Field id="price" name="price" placeholder="1000" />

                    <label htmlFor="img">img</label>
                    <input id="img" name="img" placeholder="img" type="file" onChange={(event) => formProps.setFieldValue("img", event.target.files[0])}
                    />

                    <select name="select type"> Выберите тип устройства
                        {props.types.map(el => <option>{el.name}</option>)}
                    </select>

                    <select name="select brand"> Выберите бренд устройства
                        {props.brands.map(el => <option>{el.name}</option>)}
                    </select>
                    

                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        devices: state.devices.devices,
        types: state.typesDevices.typesOfDevices,
        brands: state.brands.brands
    }
}

export default connect(mapStateToProps, {fetchTypesDevices, fetchAllBrands, createDevice, createBrand, createType})(AdminPanel)