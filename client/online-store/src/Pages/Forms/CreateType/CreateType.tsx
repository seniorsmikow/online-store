import React from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../../Redux/store'
import {createType} from '../../../Redux/typesDevices'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styles from './CreateType.module.scss'

type PropsType = {
    createType: (data: any) => void
}

const CreateType: React.FC<PropsType> = props => {

    return (
        <div className={styles.root}>
            <h1>Создать новый тип устройства</h1>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={async (values) => {
                    props.createType(values)
                }}
            >
            {({  handleSubmit, setFieldValue }) => (
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="name" name="name" placeholder="Тип" variant="filled" onChange={(event) => setFieldValue("name", event.target.value)}/>
                    <Button type="submit" variant="contained" color="primary">Создать</Button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        brands: state.brands.brands
    }
}

export default connect(mapStateToProps, {createType})(CreateType)

