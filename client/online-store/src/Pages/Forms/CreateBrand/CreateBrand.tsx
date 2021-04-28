import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../../Redux/store'
import {createBrand, fetchAllBrands} from '../../../Redux/brands'
import { Formik, Field, Form } from 'formik'
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
            <h1>Create BRAND</h1>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={async (values) => {
                    props.createBrand(values)
                }}
            >
            {(formProps) => (
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Brand" />

                    <button type="submit">Submit</button>
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