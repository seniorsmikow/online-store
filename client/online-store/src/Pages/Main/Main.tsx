import React from 'react'
import {AppStateType} from '../../Redux/store'
import {userType} from '../../types/types'
import styles from './Main.module.scss'
import {connect} from 'react-redux'
import {userRegistration} from '../../Redux/users'
import {createType} from '../../Redux/typesDevices'
import RegistrationForm from '../Forms/Registration/RegistrationForm'
import Bag from '../../img/online-remote.png'

interface StateProps {
    isReg: boolean
    error: string | null
    user: userType
}
interface DispatchProps {
    userRegistration: (email: string, password: string, name: string) => void
    createType: (type: string) => void

}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

const Main: React.FC<Props> = () => {

    return (
        <div className={styles.root}>
            <h1>Покупайте у нас!</h1>
            <div className={styles.root__img}>
                <img src={Bag} alt="online-store"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): StateProps => ({
    isReg: state.user.isReg,
    error: state.user.error,
    user: state.user.user,
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {userRegistration, createType})(Main)