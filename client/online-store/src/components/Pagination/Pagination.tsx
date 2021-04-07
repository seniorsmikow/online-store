import React from 'react'
import styles from './Pagination.module.scss'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'


type PropsType = {
    devices: any
}


const Pagination: React.FC<PropsType> = props => {

    const pages = [1, 2, 3, 4, 5, 6]


    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <SkipPreviousIcon />
            </div>
            {
                pages.map(el => <div className={styles.pagination__wrapper} key={el}>
                        <div className={styles.pagination__item}>{el}</div>
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
        devices: state.devices.devices
    }
}

export default connect(mapStateToProps)(Pagination)