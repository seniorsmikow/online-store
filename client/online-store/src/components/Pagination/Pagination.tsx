import React from 'react'
import styles from './Pagination.module.scss'
import {connect} from 'react-redux'
import {changeCurrentPage} from '../../Redux/devices'
import {AppStateType} from '../../Redux/store'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'


type PropsType = {
    devices: any
    allDevicesCount: number
    changeCurrentPage: (page: number) => void
    limitDevices: number
    currentPageDevices: number
    count: number
}


const Pagination: React.FC<PropsType> = ({devices, 
                                            allDevicesCount, 
                                            changeCurrentPage, 
                                            limitDevices, 
                                            count,
                                            currentPageDevices}) => {

    const pages: Array<number> = []
    const limitPagesCount = Math.ceil(count / 3)
    
    for(let i = 1; i <= allDevicesCount; i++) {
        pages.push(i)
    }

    pages.length = limitPagesCount

    const changePage = (item: number) => {
        changeCurrentPage(item)
    }

    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <SkipPreviousIcon />
            </div>
            {
                pages.map(el => <div className={styles.pagination__wrapper} key={el}>
                        <div className={styles.pagination__item} onClick={() => changePage(el)} style={currentPageDevices === el ? {backgroundColor: '#5d5d5d'} : {backgroundColor: '#cacaca'}}>
                            {el}
                        </div>
                    </div>)
            }
            <div className={styles.icon}>
                <SkipNextIcon />
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        devices: state.devices.devices,
        limitDevices: state.devices.limitDevices,
        currentPageDevices: state.devices.currentPageDevices
    }
}

export default connect(mapStateToProps, {changeCurrentPage})(Pagination)