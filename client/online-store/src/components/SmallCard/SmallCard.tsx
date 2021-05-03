import React from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {fetchOneDevice} from '../../Redux/basket'
import {incrementDeviceCount, addDeviceId} from '../../Redux/basket'
import {devicesType} from '../../types/types'
import styles from './SmallCard.module.scss'

type PropsType = {
    src?: string
    title: string
    id: number
    device: devicesType | null
    incrementDeviceCount: (count: number) => void
    deviceCount: number
    addDeviceId: (id: number) => void
    fetchOneDevice: (id: number) => void
}

const SmallCard: React.FC<PropsType> = ({src, 
                                        title, 
                                        id, 
                                        incrementDeviceCount, 
                                        deviceCount, 
                                        addDeviceId,
                                        fetchOneDevice
                                        }) => {

    const history = useHistory()

    const toDevicePage = () => {
        history.push(`/device/${id}`)
    }

    const addProductToBasket = () => {
        fetchOneDevice(id)
    }

    return (
        <>
        <div className={styles.root}>
            <div className={styles.card__wrapper}>
                <div className={styles.card_photo}>
                    <img src={src} alt="photo_watch" />
                </div>
                <div className={styles.info_text}>
                    {title}
                    <button onClick={() => toDevicePage()} className={styles.button_info}>узнать больше</button>
                    <button className={styles.button_addBasket} onClick={addProductToBasket}>в корзину</button>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        devices: state.devices.devices,
        device: state.devices.device,
        deviceCount: state.basket.deviceCount
    }
}

export default connect(mapStateToProps, {incrementDeviceCount, addDeviceId, fetchOneDevice})(SmallCard)