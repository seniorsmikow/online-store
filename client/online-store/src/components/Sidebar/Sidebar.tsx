import React from 'react'
import styles from './Sidebar.module.scss'


const Sidebar = () => {
    return (
        <div className={styles.root}>
            sidebar
            <ul>
                <li>Смартфоны</li>
                <li>Телевизоры</li>
                <li>Часы</li>
                <li>Стиральные машины</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
        </div>
    )
}

export default Sidebar