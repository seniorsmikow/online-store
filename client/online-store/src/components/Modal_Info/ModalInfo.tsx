import React, {useEffect} from 'react'
import {AppStateType} from '../../Redux/store'
import Snackbar from '@material-ui/core/Snackbar'
import {toggleInfoMessage} from '../../Redux/users'
import {connect} from 'react-redux'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface StateProps {
    isOpenInfoModal: boolean
    error: string | null
}
interface DispatchProps {
    toggleInfoMessage: (show: boolean, error: string | null) => void
}
interface OwnProps {
    message: string | null
}

type Props = StateProps & DispatchProps & OwnProps

const ModalInfo: React.FC<Props> = ({isOpenInfoModal, message, error, toggleInfoMessage}) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      if(message) {
        setOpen(true)
      }
  }, [message])

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
    toggleInfoMessage(false, null)
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        
        <Alert onClose={handleClose} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = (state: AppStateType): StateProps => ({
    isOpenInfoModal: state.user.isOpenInfoModal,
    error: state.user.error
})

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {toggleInfoMessage})(ModalInfo)