import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {createDevice} from '../../Redux/devices'
import {createBrand, fetchAllBrands} from '../../Redux/brands'
import {createType, fetchTypesDevices} from '../../Redux/typesDevices'
import { Formik, Field, Form } from 'formik'
import styles from './AdminPanel.module.scss'

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
                    brandId: 1,
                    typeId: 1,
                    img: null
                }}
                onSubmit={async (values) => {

                    const formData = new FormData()
                    formData.append('name', values.name)
                    formData.append('price', `${values.price}`)
                    formData.append('img', values.file)
                    formData.append('brandId', 1)
                    formData.append('typeId', 1)
                    props.createDevice(formData)

                }}
            >
            {({ errors, touched, setFieldValue }) => (
                <Form>
                    <label htmlFor="name">Название устройства</label>
                    <Field id="name" name="name" placeholder="Название устройства" />

                    <label htmlFor="price">Цена</label>
                    <Field id="price" name="price" placeholder="Цена" />

                    <label htmlFor="file">Выберите изображение</label>
                    <input id="file" name="file" type="file" onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                    }}/>

                    <select name="select type"> Выберите тип устройства
                        {props.types.map(el => <option key={el.name}>{el.name}</option>)}
                    </select>

                    <select name="select brand"> Выберите бренд устройства
                        {props.brands.map(el => <option key={el.name}>{el.name}</option>)}
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