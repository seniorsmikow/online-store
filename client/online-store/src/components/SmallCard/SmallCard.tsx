import React from 'react'
import styles from './SmallCard.module.scss'

type PropsType = {
    src?: string
    title: string
}

const SmallCard: React.FC<PropsType> = ({src, title}) => {

    return (
        <>
        
        <div className={styles.root}>
            <div className={styles.card__wrapper}>
                <div className={styles.card_photo}>
                    <img src={src} alt="photo_watch" />
                </div>
                <div className={styles.info_text}>
                    {title}
                    <button onClick={() => alert('click')} className={styles.button_info}>узнать больше</button>
                    <button className={styles.button_addBasket}>в корзину</button>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default SmallCard