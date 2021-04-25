import React from 'react'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'


const Sidebar = () => {

    return (
        <div className={styles.root}>
            <ul>
                <li><NavLink to="/smartphones">Смартфоны</NavLink></li>
                <li><NavLink to="/watches">Часы</NavLink></li>
                <li><NavLink to="/videoGames">Видеоигры</NavLink></li>
            </ul>
        </div>
    )
}


export default Sidebar