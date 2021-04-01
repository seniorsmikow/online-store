import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchTypesDevices} from '../../Redux/typesDevices'
import {AppStateType} from '../../Redux/store'
import {typeOfDevice} from '../../types/types'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'

type PropsType = {
    typesOfDevices: any
    fetchTypesDevices: () => void
}


const Sidebar: React.FC<PropsType> = props => {

    useEffect(() => {
        props.fetchTypesDevices()
    }, [])

    return (
        <div className={styles.root}>
            <ul>
                {
                    props.typesOfDevices.map((el: any) => <li key={el.name}><NavLink to="/Smartphones">{el.name}</NavLink></li>)
                }
                {/* <li><NavLink to="/Smartphones">Смартфоны</NavLink></li>
                <li><NavLink to="/Watches">Часы</NavLink></li>
                <li><NavLink to="/VideoGames">Видеоигры</NavLink></li> */}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        typesOfDevices: state.typesDevices.typesOfDevices
    }
}

export default connect(mapStateToProps, {fetchTypesDevices})(Sidebar)