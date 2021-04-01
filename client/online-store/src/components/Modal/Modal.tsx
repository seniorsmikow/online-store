import React from 'react'
import styles from './Modal.module.scss'

type PropsType = {
    isOpen: boolean
    setOpen: (open: boolean) => void
}


const Modal: React.FC<PropsType> = ({isOpen, setOpen, children}) => {

    const toggleModalWindow = () => {
        setOpen(!isOpen)
    }

    return (
        <div className={isOpen ? styles.modal__root: styles.modal__close} onClick={toggleModalWindow}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal