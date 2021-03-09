import React, { useEffect } from 'react'
import SmallCard from '../../components/SmallCard/SmallCard'
import Loader from '../../components/Loader/Loader'
import styles from './Smartphone.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'


const Smartphones = () => {

    const pages = [1, 2, 3, 4, 5]

    const {devices = [] , error, isLoading, page, limit} = useTypedSelector(state => state.devices)

    const { fetchDevices, changeDevicesPage } = useActions()

    useEffect(() => {
        fetchDevices(page, limit)
    }, [page])

    if(isLoading) {
        return <div className={styles.root}>
                    <Loader />
                </div>
            
    }
    if(error) {
        return <div className={styles.error}>{error}</div>
    }

    
    return (
        <div className={styles.root}>
            <div className={styles.pages}>
                {
                    pages.map(el => 
                    <div key={el} 
                            onClick={() => changeDevicesPage(el)} 
                            style={{border:el === page ? '2px solid green' : '1px solid gray', padding: 10, borderRadius: '5px'}}>
                        {el}
                    </div>) 
                }
            </div>
            <div className={styles.cards}>
                {
                    devices.map(el => <SmallCard key={el.id} url={el.url} title={el.title}/>)
                }
            </div>
        </div>
    )
}

export default Smartphones