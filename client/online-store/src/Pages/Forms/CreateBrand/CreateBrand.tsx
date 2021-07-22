import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../../Redux/store'
import {createBrand, fetchAllBrands} from '../../../Redux/brands'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styles from './CreateBrand.module.scss'

type PropsType = {
    createBrand: (data: any) => void
    fetchAllBrands: () => void
    brands: any
}

const CreateBrand: React.FC<PropsType> = props => {

    const fetchAllBrands = props.fetchAllBrands;

    useEffect(() => {
        fetchAllBrands();
    }, [fetchAllBrands]);

    return (
        <div className={styles.root}>
            <h1>Создать новый бренд</h1>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={async (values) => {
                    props.createBrand(values)
                }}
            >
            {({  handleSubmit, setFieldValue }) => (
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="name" name="name" placeholder="Бренд" variant="filled" onChange={(event) => setFieldValue("name", event.target.value)}/>
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

export default connect(mapStateToProps, {fetchAllBrands, createBrand})(CreateBrand)