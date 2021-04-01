import React, {useState} from 'react'
import styles from './Header.module.scss'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {userLogin} from '../../Redux/users'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from '../../components/Button/Button'
import {NavLink} from 'react-router-dom'
import Modal from '../Modal/Modal'
import LoginForm from '../../Pages/Forms/Login/LoginForm'


type PropsType = {
    user: any
    userLogin: (email: string, password: string) => void
}

const Header: React.FC<PropsType> = props => {

    const [open, setOpen] = useState(false)

    const openModalWindow = () => {
        setOpen(true)
    }

    return (
        <div className={styles.root}>
            <h1>
                <NavLink to="/">Online-store</NavLink>
            </h1>

            <Modal isOpen={open} setOpen={setOpen}>
                <LoginForm userLogin={props.userLogin}/>
            </Modal>

            <Button text="Login" style={{width: '60px', backgroundColor: '#5f5f5f', color: 'white', fontSize: '10px'}} func={openModalWindow}/>

            {props.user.role === "ADMIN" ? 

                //ADMIN

                <div className={styles.info_block}>
                    <div>{props.user.email ? props.user.name : 'Wait'}</div>
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
                    <div>{props.user.email ? props.user.name : 'Wait'}</div>
                    <div className={styles.basket}>
                        <AddShoppingCartIcon />
                        корзина
                    </div>
                    <div>
                        <Button text="Logout" style={{width: '60px', backgroundColor: 'red', color: 'white', fontSize: '12px'}} />
                    </div>
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return ({
        user: state.user.user,
    })
}

export default connect(mapStateToProps, {userLogin})(Header)