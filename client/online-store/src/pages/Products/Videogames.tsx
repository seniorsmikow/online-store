import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllDevices} from '../../Redux/devices'
import {AppStateType} from '../../Redux/store'
import {devicesType} from '../../types/types'
import SmallCard from '../../components/SmallCard/SmallCard'
import Pagination from '../../components/Pagination/Pagination'
import styles from './Smartphones.module.scss'

type PropsType = {
    //devices: Array<devicesType>
    devices: any
    fetchAllDevices: () => void
}

const VideoGames: React.FC<PropsType> = React.memo(props => {

    const devices = props.devices.filter((el: any) => el.typeId === 3)
    const fetchAllDevices = props.fetchAllDevices

    useEffect(() => {
        fetchAllDevices()
    }, [devices, fetchAllDevices])


    return (
        <div className={styles.root}>
            <div className={styles.smartphones__pagination}>
                <Pagination /> 
            </div>
            <div className={styles.smartphones__wrapper}>
                {
                    devices.map((el: any) => 
                    <div className={styles.card__wrapper} key={el.name}>
                        <SmallCard key={el.name} title={el.name} src={process.env.REACT_APP_API_IMG + el.img}/>
                    </div>
                    
                    )
                }
            </div>
        </div>
    )
    
})

const mapStateToProps = (state: AppStateType) => {
    return {
        devices: state.devices.devices
    }
}

export default connect(mapStateToProps, {fetchAllDevices})(VideoGames)