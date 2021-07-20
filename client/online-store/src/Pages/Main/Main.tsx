import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AppStateType} from '../../Redux/store'
import styles from './Main.module.scss'
import Bag from '../../img/online-remote.png'
import ModalInfo from '../../components/Modal_Info/ModalInfo'
import {toggleInfoMessage} from '../../Redux/users'

interface StateProps {
    error: string | null
    message: string | null
}
interface DispatchProps {
    toggleInfoMessage: (show: boolean, error: string | null) => void
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

const Main: React.FC<Props> = (props) => {

    const error = useSelector((state: AppStateType) => state.user.error)
    const message = useSelector((state: AppStateType) => state.user.message)
    let authMessage = error || message

    const dispatch = useDispatch()

    useEffect(() => { 
        if(authMessage) {
            dispatch(toggleInfoMessage(true, authMessage))
        }
    })

    return (
        <div className={styles.root}>
            <h1>Покупайте у нас!</h1>
            <div className={styles.root__img}>
                <img src={Bag} alt="online-store"/>
            </div>
            <ModalInfo message={authMessage}  />
        </div>
    )
}

// const mapStateToProps = (state: AppStateType): StateProps => ({
//     error: state.user.error,
//     isOpenInfoModal: state.user.isOpenInfoModal,
//     message: state.user.message
// })

//export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {toggleInfoMessage})(Main)

export default Main