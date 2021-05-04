import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllDevices,changeCurrentPage} from '../../Redux/devices'
import {AppStateType} from '../../Redux/store'
import {devicesType} from '../../types/types'
import SmallCard from '../../components/SmallCard/SmallCard'
import Pagination from '@material-ui/lab/Pagination'
import styles from './Smartphones.module.scss'

interface StateProps {
    devices: Array<devicesType>
    limitDevices: number
    currentPageDevices: number
    count: number
}
interface DispatchProps {
    fetchAllDevices: (typeId: number, limit: number, page: number) => void
    changeCurrentPage: (page: number) => void
}
interface OwnProps {}
type Props = StateProps & DispatchProps & OwnProps


const Smartphones: React.FC<Props> = React.memo(({devices, 
                                                    fetchAllDevices, 
                                                    limitDevices, 
                                                    count, 
                                                    currentPageDevices, 
                                                    changeCurrentPage}) => {

    const[currentPage, setCurrentPageDevices] = useState(1)

    const smartphones = devices

    const pageSize = 3

    let pagesCount = Math.ceil(count / pageSize)

    useEffect(() => {
        fetchAllDevices(1, 3, currentPage)
    }, [fetchAllDevices, limitDevices, currentPage])


    return (
        <div className={styles.root}>
            <div className={styles.smartphones__pagination}>
                <Pagination 
                    color="secondary" 
                    count={pagesCount} 
                    shape="rounded" 
                    page={currentPage}
                    showFirstButton={true} 
                    showLastButton={true} 
                    onChange = {(event, pages) => {setCurrentPageDevices(pages)}}
                />
            </div>
            <div className={styles.smartphones__wrapper}>
                {
                    smartphones.map((el: any) => 
                    <div className={styles.card__wrapper} key={el.name} >
                        <SmallCard key={el.name} title={el.name} src={process.env.REACT_APP_API_IMG + el.img} id={el.id}/>
                    </div>
                    
                    )
                }
            </div>
        </div>
    )
    
})

const mapStateToProps = (state: AppStateType): StateProps => {
    return {
        devices: state.devices.devices,
        limitDevices: state.devices.limitDevices,
        currentPageDevices: state.devices.currentPageDevices,
        count: state.devices.count
    }
}

export default connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, {fetchAllDevices, changeCurrentPage})(Smartphones)