import React from 'react'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'


const Sidebar = () => {

    return (
        <div className={styles.root}>
            <ul>
                <li><NavLink to="/Smartphones">Смартфоны</NavLink></li>
                <li><NavLink to="/Watches">Часы</NavLink></li>
                <li><NavLink to="/VideoGames">Видеоигры</NavLink></li>
            </ul>
        </div>
    )
}


export default Sidebar