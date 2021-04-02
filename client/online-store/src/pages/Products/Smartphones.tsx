import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllDevices} from '../../Redux/devices'
import {AppStateType} from '../../Redux/store'
import {devicesType} from '../../types/types'
import SmallCard from '../../components/SmallCard/SmallCard'
import styles from './Smartphones.module.scss'

type PropsType = {
    //devices: Array<devicesType>
    devices: any
    fetchAllDevices: () => void
}

const Smartphones: React.FC<PropsType> = props => {

    const devices = props.devices.filter((el: any) => el.typeId === 1)
    const fetchAllDevices = props.fetchAllDevices

    useEffect(() => {
        fetchAllDevices()
    }, [devices, fetchAllDevices])


    return (
        <div className={styles.root}>
            {
                devices.map((el: any) => <SmallCard key={el.name} title={el.name} url={ "https://playgame34.ru/wp-content/uploads/2019/10/фиолет.jpg"}/>)
            }
        </div>
    )
    
}

const mapStateToProps = (state: AppStateType) => {
    return {
        devices: state.devices.devices
    }
}

export default connect(mapStateToProps, {fetchAllDevices})(Smartphones)