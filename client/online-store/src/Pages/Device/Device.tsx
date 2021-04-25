import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import GradeIcon from '@material-ui/icons/Grade'
import DescriptionIcon from '@material-ui/icons/Description'
import {devicesType} from '../../types/types'
import {RouteComponentProps} from 'react-router'
import {fetchOneDevice} from '../../Redux/devices'
import styles from './Device.module.scss'

type PropsType = {
    device: devicesType | null
    fetchOneDevice: (id: any) => void
}

type DeviceProps = PropsType & RouteComponentProps

const Device: React.FC<DeviceProps> = props => {

    const device = props.device
    
    useEffect(() => {
        props.fetchOneDevice(props.match.params)
    })

    return (
        <div className={styles.root}>
            {
                device ?
                <div className={styles.device__wrapper}>
                    <div className={styles.device__img}>
                        <img src={process.env.REACT_APP_API_IMG + device.img} alt={device.name}/>
                    </div>
                    <div className={styles.device__name}>
                        <div><DescriptionIcon /></div>
                        <div className={styles.device__name_text}>Название: {device.name}</div>
                    </div>
                    <div className={styles.device__price}>
                        <div><MonetizationOnIcon /></div>
                        <div className={styles.device__price_text}>Цена: {device.price} руб.</div>
                    </div>
                    <div className={styles.device__rating}>
                        <div><GradeIcon /></div>
                        <div className={styles.device__rating_text}>Рейтинг: {device.rating}</div>
                    </div>
                </div>
                : <div>Данные о продукте отсутствуют</div>
            }
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        device: state.devices.device
    }
}

export default connect(mapStateToProps, {fetchOneDevice})(Device)