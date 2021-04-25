import React, {useState} from 'react'
import styles from './NewPagination.module.scss'
import cn from 'classnames'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize,
                                      currentPage = 1,
                                      onPageChanged = x => x,
                                      portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const toPrevPage = () => {
        setPortionNumber(portionNumber - 1)
        onPageChanged(currentPage - 1)
    }

    const toNextPage = () => {
        //onPageChanged(currentPage + 1)
        setPortionNumber(portionNumber + 1)
    }


    return (
        <div className={cn(styles.paginator)}>
            { portionNumber > 1 && 
            <button onClick={toPrevPage}>
                <SkipPreviousIcon />
            </button> }

                {pages
                    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map((p) => {
                    return <span className={ cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber) }
                                key={p}
                                onClick={(e) => {
                                    onPageChanged(p);
                                }}>{p}</span>
                })}
            { portionCount > portionNumber && 
                <button onClick={toNextPage}>
                    <SkipNextIcon />
                </button> }


        </div>)
}

export default Paginator