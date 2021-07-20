import React, {useState, useEffect} from 'react'
import {BASKET_ROUTE} from '../../components/AppRouter/constants'
import styles from './Header.module.scss'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {userLogin, userLogout, checkUserAuth} from '../../Redux/users'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from '../../components/Button/Button'
import {NavLink} from 'react-router-dom'
import Badge from '@material-ui/core/Badge'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {userType} from '../../types/types'
import {useHistory} from 'react-router-dom'
import LogAndRegModal from '../LogAndRegModal/LogAndRegModal'
import StarOutlineIcon from '@material-ui/icons/StarOutline'

interface StateProps {
    user: userType
    devicesId: Array<number>
    isAuth: boolean
    isReg: boolean
}
interface DispatchProps {
    userLogin: (email: string, password: string) => void
    userLogout: () => void
    checkUserAuth: () => void
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

const Header: React.FC<Props> = ({user, userLogin, devicesId, isAuth, isReg, userLogout, checkUserAuth}) => {

    const [open, setOpen] = useState(false)
    const [auth, setAuth] = useState(isAuth)
    const [count, setCount] = useState(devicesId.length)
    const history = useHistory()

    useEffect(() => {
        setCount(devicesId.length)
        setAuth(isAuth)
        checkUserAuth()
    }, [devicesId, isAuth, checkUserAuth])

    const openModalWindow = () => {
        setOpen(true)
    }

    const userLogoutNew = () => {
        userLogout()
    }

    return (
        <div className={styles.root}>
            <div className={styles.title__wrapper}>
                <h1>
                    <NavLink to="/main">Online-store</NavLink>
                </h1>
                <div className={styles.icon}>
                    <StarOutlineIcon fontSize="large" color="error"/>
                </div>
            </div>

            {user.role === "ADMIN" ? 

                //ADMIN

                <div className={styles.info_block}>
                    <div>{user.email ? user.name : 'Wait'}</div>
                    <div className={styles.admin_block}>
                        <NavLink to="/AdminPanel">
                            <Button text="Управление" style={{width: '60px', backgroundColor: '#5f5f5f', color: 'white', fontSize: '10px'}}>
                            </Button>
                        </NavLink>
                    </div>
                    <div>
                        <LogAndRegModal userLogin={userLogin} buttonText={isAuth ? "Logout" : "Login"} isAuth={isAuth} isReg={isReg} userLogout={userLogout}/>
                    </div>
                </div>

                : 

                // USER

                <div className={styles.info_block}>
                    <div>{user.email ? user.name : <PersonOutlineIcon fontSize="large"/>}</div>
                    <div className={styles.basket}>
                        <Badge 
                            badgeContent={count} 
                            color="secondary"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <AddShoppingCartIcon fontSize="large" style={{cursor: 'pointer'}} onClick={() => history.push(BASKET_ROUTE) }/>
                        </Badge>
                    </div>
                    <div>
                        <LogAndRegModal userLogin={userLogin} buttonText={auth ? "Logout" : "Login"} isAuth={isAuth} isReg={isReg} userLogout={userLogout}/>
                    </div>
                </div>
            }
        </div>
    )
}

let mapState = (state: AppStateType): StateProps => ({
    user: state.user.user,
    devicesId: state.basket.devicesId,
    isAuth: state.user.isAuth,
    isReg: state.user.isReg
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapState, {userLogin, userLogout, checkUserAuth})(Header)