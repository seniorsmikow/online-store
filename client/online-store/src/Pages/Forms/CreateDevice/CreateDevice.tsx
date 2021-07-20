import React, {useEffect} from 'react'
import {AppStateType} from '../../../Redux/store'
import {devicesType, typeOfDevice, brandsType} from '../../../types/types'
import {connect} from 'react-redux'
import {createDevice} from '../../../Redux/devices'
import {fetchAllBrands} from '../../../Redux/brands'
import {fetchTypesDevices} from '../../../Redux/typesDevices'
import { Formik, Field, Form } from 'formik'
import styles from './CreateDevice.module.scss'

interface StateProps {
    devices: Array<devicesType>
    types: Array<typeOfDevice>
    brands: Array<brandsType>
    errorMessage: string | null
}
interface DispatchProps {
    fetchTypesDevices: () => void
    fetchAllBrands: () => void
    createDevice: (formData: any) => void
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps 

const CreateDeviceForm: React.FC<Props> = ({
                                        devices,
                                        types, 
                                        brands,
                                        fetchTypesDevices,
                                        fetchAllBrands,
                                        createDevice,
                                        errorMessage
                                    }) => {

    useEffect(() => {
        fetchAllBrands();
        fetchTypesDevices();
    }, [fetchAllBrands, fetchTypesDevices]);

    return (
        <div className={styles.root}>
            <h1 className={styles.form_h1}>Создание нового товара</h1>
            <Formik
                initialValues={{
                    name: '',
                    price: 0,
                    brandId: '',
                    typeId: '',
                    img: null,
                    file: '' 
                }}
                onSubmit={async (values) => {

                    const formData = new FormData()
                    formData.append('name', values.name)
                    formData.append('price', `${values.price}`)
                    formData.append('img', values.file)
                    formData.append('brandId', values.brandId)
                    formData.append('typeId', values.typeId)
                    createDevice(formData)

                }}
            >
            {({ errors, touched, setFieldValue, values, handleChange }) => (
                <Form className={styles.form__wrapper}>
                    <label htmlFor="name">Название устройства</label>
                    <Field className={styles.form__name_field} id="name" name="name" placeholder="Название устройства" />

                    <label htmlFor="price">Цена</label>
                    <Field className={styles.form__price_field} id="price" name="price" placeholder="Цена" type="number"/>

                    <label htmlFor="file">Выберите изображение</label>
                    <input className={styles.file_input} id="file" name="file" type="file" onChange={(event: React.SyntheticEvent<EventTarget>) => {
                        const target= event.target as HTMLInputElement;
                        const file: File = (target.files as FileList)[0]
                        setFieldValue("file", file);
                    }}/>

                    <select
                        name="typeId"
                        value={values.typeId}
                        onChange={handleChange}
                    >
                        {types.map(el => <option key={el.name} value={el.id}>{el.name}</option>)}
                    </select>

                    <select
                        name="brandId"
                        value={values.brandId}
                        onChange={handleChange}
                    >
                        {brands.map(el => <option key={el.name} value={el.id}>{el.name}</option>)}
                    </select>

                    <button type="submit">Создать девайс</button>
                </Form>
            )}
            </Formik>
            {errorMessage ? <div>{errorMessage}</div> : <div>Нет ошибок</div>}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): StateProps => ({
    devices: state.devices.devices,
    types: state.typesDevices.typesOfDevices,
    brands: state.brands.brands,
    errorMessage: state.devices.errorMessage
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {fetchTypesDevices, fetchAllBrands, createDevice})(CreateDeviceForm)