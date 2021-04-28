import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {fetchTypesDevices} from '../../Redux/typesDevices'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'
import {SMARTPHONES_ROUTE, WATCHES_ROUTE, VIDEOGAMES_ROUTE} from '../../components/AppRouter/constants'

type PropsType = {
    typesOfDevices: Array<any>
    fetchTypesDevices: () => void
}


const Sidebar: React.FC<PropsType> = ({typesOfDevices, fetchTypesDevices}) => {

    useEffect(() => {
        fetchTypesDevices()
    }, [fetchTypesDevices])

    return (
        <div className={styles.root}>
            <ul>
                {
                    typesOfDevices.map(el => <NavLink key={el.name} to={`$/{el.name}`}>{el.name}</NavLink>)
                }
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