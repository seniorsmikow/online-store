import React from 'react'
import styles from './Main.module.scss'
import {connect} from 'react-redux'
import {userRegistration} from '../../Redux/users'
import RegistrationForm from '../Forms/Registration/RegistrationForm'


const Main = props => {

    return (
        <div className={styles.root}>
            Main page
            <RegistrationForm 
                isReg={props.isReg}
                userRegistration={props.userRegistration}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isReg: state.user.isReg,
        error: state.user.error,
        user: state.user.user
    }
}

export default connect(mapStateToProps, {userRegistration})(Main)