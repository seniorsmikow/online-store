import React from 'react'
import styles from './Auth.module.scss'
import {NavLink, useLocation} from 'react-router-dom'
import Button from '@material-ui/core/Button'


const AuthPage = () => {

    const location = useLocation()
    console.log(location)

    const isAuth = location.pathname


    return (
        <div className={styles.root}>
            {
                isAuth === "authPage" ? "Auth" : "Registration"
            }
            Auth
            
            <NavLink to="/registration"><Button>sdjksdfj
                </Button></NavLink>
            
        </div>
    )
}

export default AuthPage