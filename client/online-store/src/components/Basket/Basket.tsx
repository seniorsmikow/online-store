import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchOneDevice} from '../../Redux/devices'
import {AppStateType} from '../../Redux/store'
import Button from '@material-ui/core/Button'
import styles from './Basket.module.scss'

type PropsType = {
    devices: any
    devicesId: Array<number> 
    fetchOneDevice: (id: any) => void
}

const Basket: React.FC<PropsType> = ({devices, devicesId, fetchOneDevice}) => {

    useEffect(() => {
        fetchOneDevice([...devicesId])
    }, [fetchOneDevice])

    return (
        <div className={styles.root}>
            Basket page
            <div>
                {devices ? 
                <div>
                    Вы добавили в корзину следующие продукты:
                    {devices.map((el: any) => <div>{el.name}</div>)}
                </div>
                : 
                <div>Ваша корзина пуста</div>}
                
            </div>
            <Button variant="contained" color="primary" style={{marginTop: '20px'}}>Очистить корзину</Button>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        devices: state.basket.device,
        devicesId: state.basket.devicesId
    }
}

export default connect(mapStateToProps, {fetchOneDevice})(Basket)