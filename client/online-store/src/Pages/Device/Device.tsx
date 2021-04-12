import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchOneDevice} from '../../Redux/devices'
import {AppStateType} from '../../Redux/store'
import styles from './Device.module.scss'

type PropsType = {
    fetchOneDevice: (id: string) => void
    device: any
}


const Device: React.FC<PropsType> = ({fetchOneDevice, device}) => {

    debugger

    const history = useHistory()

    useEffect(() => {
        fetchOneDevice(history.location.pathname)
    }, [fetchOneDevice, device])

    return (
        <div className={styles.root}>
            <div>{device.name}</div>
            <div>{device.price}</div>
            <div>{device.rating}</div>
            <div>
                <img src={process.env.REACT_APP_API_IMG + device.img}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        device: state.devices.device
    }
}

export default connect(mapStateToProps, {fetchOneDevice})(Device)