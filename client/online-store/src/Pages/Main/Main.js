import React from 'react';
import styles from './Main.module.scss';
import {connect} from 'react-redux';
import {userRegistration} from '../../Redux/users';
import RegistrationForm from '../Forms/Registration/RegistrationForm';
import CreateBrand from '../Forms/CreateBrand/CreateBrand';
import AdminPanel from '../AdminPanel/AdminPanel';


const Main = props => {

    return (
        <div className={styles.root}>
            Main page
            <RegistrationForm 
                isReg={props.isReg}
                userRegistration={props.userRegistration}
            />
            <CreateBrand />
            <AdminPanel />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isReg: state.user.isReg,
        error: state.user.error,
        user: state.user.user,
    }
}

export default connect(mapStateToProps, {userRegistration})(Main)