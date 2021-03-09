import React from 'react'
import styles from './SmallCard.module.scss'

type PropsType = {
    url?: string
    title: string
}

const SmallCard: React.FC<PropsType> = ({url, title}) => {

    return (
        <>
        
        <div className={styles.root}>
            <div className={styles.card__wrapper}>
                <div className={styles.card_photo}>
                    <img src={url} alt="photo_watch" />
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