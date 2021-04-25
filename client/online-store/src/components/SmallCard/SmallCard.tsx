import React from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {devicesType} from '../../types/types'
import styles from './SmallCard.module.scss'

type PropsType = {
    src?: string
    title: string
    id: number
    device: devicesType | null
}

const SmallCard: React.FC<PropsType> = ({src, title, id}) => {

    const history = useHistory()

    const toDevicePage = () => {
        history.push(`/device/${id}`)
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
                    <button className={styles.button_addBasket}>в корзину</button>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        devices: state.devices.devices,
        device: state.devices.device
    }
}

export default connect(mapStateToProps)(SmallCard)