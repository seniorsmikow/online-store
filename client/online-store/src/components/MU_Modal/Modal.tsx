import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import styles from './Modal.module.scss'
import LoginForm from '../../Pages/Forms/Login/LoginForm'
import RegistrationForm from '../../Pages/Forms/Registration/RegistrationForm'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom"

interface PropsType  {
  userLogin: (email: string, password: string) => void
  buttonText: string
  isAuth: boolean
  isReg: boolean
}

const LogAndRegModal: React.FC<PropsType> = ({userLogin, buttonText, isAuth, isReg}) => {

  const [reg, setReg] = useState(isReg)

  const [open, setOpen] = React.useState(false)

  const history = useHistory()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setReg(false)
  }

  const toRegistration = () => {
    history.push("/registration")
    handleClose()
  }

  return (
    <div className={styles.root}>
      <Button variant="contained" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите почтовый адрес и пароль, чтобы войти
          </DialogContentText>
          {
            reg ? <RegistrationForm  userRegistration={userLogin}/>
                    : <LoginForm userLogin={userLogin} handleClose={handleClose}/>
          }

          <div className={styles.registration_block}>
            <DialogContentText>
              Отсутствует аккаунт? 
              <button onClick={toRegistration}>Регистрация</button>
            </DialogContentText>
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LogAndRegModal