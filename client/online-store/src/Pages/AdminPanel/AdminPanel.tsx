import React, {useEffect} from 'react'
import {AppStateType} from '../../Redux/store'
import {devicesType, typeOfDevice, brandsType} from '../../types/types'
import {connect} from 'react-redux'
import {createDevice} from '../../Redux/devices'
import {createBrand, fetchAllBrands} from '../../Redux/brands'
import {createType, fetchTypesDevices} from '../../Redux/typesDevices'
import { Formik, Field, Form } from 'formik'
import styles from './AdminPanel.module.scss'

interface StateProps {
    devices: Array<devicesType>
    types: Array<typeOfDevice>
    brands: Array<brandsType>
}
interface DispatchProps {
    fetchTypesDevices: () => void
    fetchAllBrands: () => void
    // createDevice: (formData: any) => void
    // createBrand: () => void
    // createType: () => void
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps 

const AdminPanel: React.FC<Props> = ({
                                        devices,
                                        types, 
                                        brands,
                                        fetchTypesDevices,
                                        fetchAllBrands,
                                        // createDevice,
                                        // createBrand,
                                        // createType
                                    }) => {

                                        debugger

    useEffect(() => {
        fetchAllBrands();
        fetchTypesDevices();
    }, [fetchAllBrands, fetchTypesDevices]);

    return (
        <div className={styles.root}>
            <h1>Создание нового товара</h1>
            <Formik
                initialValues={{
                    name: '',
                    price: 0,
                    brandId: '1',
                    typeId: '1',
                    img: null,
                    file: '' 
                }}
                onSubmit={async (values) => {

                    const formData = new FormData()
                    formData.append('name', values.name)
                    formData.append('price', `${values.price}`)
                    formData.append('img', values.file)
                    formData.append('brandId', '1')
                    formData.append('typeId', '1')
                    createDevice(formData)

                }}
            >
            {({ errors, touched, setFieldValue }) => (
                <Form>
                    <label htmlFor="name">Название устройства</label>
                    <Field id="name" name="name" placeholder="Название устройства" />

                    <label htmlFor="price">Цена</label>
                    <Field id="price" name="price" placeholder="Цена" />

                    <label htmlFor="file">Выберите изображение</label>
                    <input id="file" name="file" type="file" onChange={(event: React.SyntheticEvent<EventTarget>) => {
                        const target= event.target as HTMLInputElement;
                        const file: File = (target.files as FileList)[0]
                        setFieldValue("file", file);
                    }}/>

                    <select name="select type"> Выберите тип устройства
                        {types.map(el => <option key={el.name}>{el.name}</option>)}
                    </select>

                    <select name="select brand"> Выберите бренд устройства
                        {brands.map(el => <option key={el.name}>{el.name}</option>)}
                    </select>
                    

                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): StateProps => ({
    devices: state.devices.devices,
    types: state.typesDevices.typesOfDevices,
    brands: state.brands.brands
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {fetchTypesDevices, fetchAllBrands})(AdminPanel)

//fetchTypesDevices, fetchAllBrands, createDevice, createBrand, createType