import React, {useEffect} from 'react'
import styles from './Main.module.scss'
import {connect} from 'react-redux'
import {userRegistration, userLogin} from '../../Redux/users'
import LoginForm from '../Forms/Login/LoginForm'
import RegistrationForm from '../Forms/Registration/RegistrationForm'


const Main = props => {

    console.log(process.env.REACT_APP_API_URL)

    return (
        <div className={styles.root}>
            Main page
            <LoginForm userLogin={props.userLogin}/>
            <RegistrationForm 
                isReg={props.isReg}
                userRegistration={props.userRegistration}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isReg: state.user.isReg
    }
}

export default connect(mapStateToProps, {userRegistration, userLogin})(Main)