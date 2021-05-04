import React from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {fetchOneDevice} from '../../Redux/basket'
import {incrementDeviceCount, addDeviceId} from '../../Redux/basket'
import {devicesType} from '../../types/types'
import styles from './SmallCard.module.scss'

interface StateProps {
    device: devicesType | null
    deviceCount: number
}
interface DispatchProps {
    incrementDeviceCount: (count: number) => void
    addDeviceId: (id: number) => void
    fetchOneDevice: (id: number) => void
}

interface OwnProps {
    src?: string
    title: string
    id: number
}
type Props = StateProps & DispatchProps & OwnProps

const SmallCard: React.FC<Props> = ({src, 
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

const mapStateToProps = (state: AppStateType): StateProps => {
    return {
        device: state.devices.device,
        deviceCount: state.basket.deviceCount
    }
}

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {incrementDeviceCount, addDeviceId, fetchOneDevice})(SmallCard)