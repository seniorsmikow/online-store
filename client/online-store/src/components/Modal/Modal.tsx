import React from 'react';
import styles from './Modal.module.scss'

type PropsType = {
    isOpen: boolean
}


const Modal: React.FC<PropsType> = ({isOpen}) => {

    const [show, setShow] = React.useState(isOpen)

    console.log(show)

    const handleClose = () => {
        setShow(!show)
        console.log(show)
    }

    return (
        <div className={show ? styles.modal_open : styles.modal_close}>
            modal
            <button onClick={handleClose}>close</button>
        </div>
    )
}

export default Modal