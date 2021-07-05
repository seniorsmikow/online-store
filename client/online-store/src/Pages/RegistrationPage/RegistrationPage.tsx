import React from 'react'
import {AppStateType} from '../../Redux/store'
import {userType} from '../../types/types'
import styles from './RegistrationPage.module.scss'
import {connect} from 'react-redux'
import {userRegistration} from '../../Redux/users'
import {createType} from '../../Redux/typesDevices'
import RegistrationForm from '../Forms/Registration/RegistrationForm'

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

const RegPage: React.FC<Props> = ({userRegistration}) => {

    return (
        <div className={styles.root}>
            <RegistrationForm 
                userRegistration={userRegistration}
            />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): StateProps => ({
    isReg: state.user.isReg,
    error: state.user.error,
    user: state.user.user,
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {userRegistration, createType})(RegPage)