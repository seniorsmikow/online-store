import React from 'react'
import styles from './Header.module.scss'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '../../components/Button/Button'

const Header = () => {
    return (
        <div className={styles.root}>

            <h1>Online-store</h1>

            <div className={styles.info_block}>
                <div>Admin</div>
                <div className={styles.basket}>
                    <AddShoppingCartIcon />
                    корзина
                </div>
                <div>
                    <Button text={"Logout"} style={{color: "white"}}/>
                </div>
            </div>
        </div>
    )
}

export default Header