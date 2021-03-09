import React from 'react';
import styles from './Button.module.scss';


type StylesTypes = {
    width?: string
    backgroundColor?: string
    color?: string
    fontSize?: string
}

type PropsType = {
    text: string
    style: StylesTypes
    func?: () => void
}

const Button: React.FC<PropsType> = ({text, style, func}) => {

    return (
        <button className={styles.root} style={style} onClick={func}>
            {text}
        </button>
    )
}

export default Button