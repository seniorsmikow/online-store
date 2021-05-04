import React, {useState, useEffect} from 'react'
import {BASKET_ROUTE} from '../../components/AppRouter/constants'
import styles from './Header.module.scss'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {userLogin} from '../../Redux/users'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from '../../components/Button/Button'
import {NavLink} from 'react-router-dom'
import Modal from '../Modal/Modal'
import LoginForm from '../../Pages/Forms/Login/LoginForm'
import Badge from '@material-ui/core/Badge'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {userType} from '../../types/types'
import {useHistory} from 'react-router-dom'

interface StateProps {
    user: userType
    devicesId: Array<number>
}
interface DispatchProps {
    userLogin: (email: string, password: string) => void
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

const Header: React.FC<Props> = ({user, userLogin, devicesId}) => {

    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(devicesId.length)
    const history = useHistory()

    useEffect(() => {
        setCount(devicesId.length)
    }, [devicesId])

    const openModalWindow = () => {
        setOpen(true)
    }
    
    return (
        <div className={styles.root}>
            <h1>
                <NavLink to="/main">Online-store</NavLink>
            </h1>

            <Modal isOpen={open} setOpen={setOpen}>
                <LoginForm userLogin={userLogin}/>
            </Modal>

            <Button text="Login" style={{width: '60px', backgroundColor: '#5f5f5f', color: 'white', fontSize: '10px'}} func={openModalWindow}/>

            {user.role === "ADMIN" ? 

                //ADMIN

                <div className={styles.info_block}>
                    <div>{user.email ? user.name : 'Wait'}</div>
                    <div>
                        <NavLink to="/AdminPanel">
                            <Button text="Управление" style={{width: '60px', backgroundColor: '#5f5f5f', color: 'white', fontSize: '10px'}}>
                            </Button>
                        </NavLink>
                    </div>
                    <div>
                        <Button text="Logout" style={{width: '60px', backgroundColor: 'red', color: 'white', fontSize: '12px'}} />
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
                        <Button text="Logout" style={{width: '60px', backgroundColor: 'red', color: 'white', fontSize: '12px'}} />
                    </div>
                </div>
            }
        </div>
    )
}

let mapState = (state: AppStateType): StateProps => ({
    user: state.user.user,
    devicesId: state.basket.devicesId
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapState, {userLogin})(Header)