import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {fetchAllBrands} from '../../Redux/brands';
import styles from './brands.module.css';


const Brands = props => {

    const fetch = props.fetchAllBrands;

    useEffect(() => {
        fetch();
    }, [fetch]);


    return (
        <div className={styles.root}>
            {props.brands.map(el => <div key={el.id}>{el.name}</div>)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      brands: state.brands.brands,
    }
  }

export default (connect(mapStateToProps, {fetchAllBrands})(Brands));
