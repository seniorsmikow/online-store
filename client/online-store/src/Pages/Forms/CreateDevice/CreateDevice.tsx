import React, {useEffect} from 'react'
import {AppStateType} from '../../../Redux/store'
import {devicesType, typeOfDevice, brandsType} from '../../../types/types'
import {connect} from 'react-redux'
import {createDevice} from '../../../Redux/devices'
import {fetchAllBrands} from '../../../Redux/brands'
import {fetchTypesDevices} from '../../../Redux/typesDevices'
import { Formik, Form } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import styles from './CreateDevice.module.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '70%'
    },
    selectEmpty: {
      marginTop: theme.spacing(4),
    },
  }),
);

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

    const classes = useStyles()

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
                    
                    <TextField className={classes.formControl} id="name" name="name" placeholder="Название устройства" variant="filled" onChange={(event) => setFieldValue("name", event.target.value)}/>
                    
                    <TextField className={classes.formControl} id="price" type="number" name="price" placeholder="Цена" variant="filled" onChange={(event) => setFieldValue("price", event.target.value)}/>
                    
                    <div className={styles.file__input}>
                        <label htmlFor="file">Выберите изображение</label>
                        <input  id="file" name="file" type="file" onChange={(event: React.SyntheticEvent<EventTarget>) => {
                            const target= event.target as HTMLInputElement;
                            const file: File = (target.files as FileList)[0]
                            setFieldValue("file", file);
                        }}/>
                    </div>

                    <FormControl className={classes.formControl} variant="filled">
                        <InputLabel id="brand">Бренд</InputLabel>
                        <Select
                            labelId="brand"
                            id="brand"
                            name="brandId"
                            value={values.brandId}
                            onChange={handleChange}
                        >
                            {brands.map(el => <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl} variant="filled">
                    <InputLabel id="type">Тип устройства</InputLabel>
                        <Select
                            labelId="type"
                            id="type"
                            name="typeId"
                            value={values.typeId}
                            onChange={handleChange}
                        >
                            {types.map(el => <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <Button type="submit" variant="contained" color="primary">Создать</Button>
                </Form>
            )}
            </Formik>
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