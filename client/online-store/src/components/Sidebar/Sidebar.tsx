import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/store'
import {fetchTypesDevices, changeActiveType} from '../../Redux/typesDevices'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'
import {SMARTPHONES_ROUTE, WATCHES_ROUTE, VIDEOGAMES_ROUTE} from '../../components/AppRouter/constants'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

type PropsType = {
    typesOfDevices: Array<any>
    fetchTypesDevices: () => void
    changeActiveType: (type: number) => void
    activeType: number
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));


const Sidebar: React.FC<PropsType> = ({typesOfDevices, fetchTypesDevices, changeActiveType, activeType}) => {

    const classes = useStyles();

    useEffect(() => {
        fetchTypesDevices()
    }, [fetchTypesDevices])

    return (
        <div className={styles.root}>
            <div className={classes.root}>
                <ButtonGroup
                    disableElevation variant="contained" 
                >
                    {
                        typesOfDevices.map((el, index) => 
                            <Button
                                key={el.id}
                                style={index === activeType ? {backgroundColor: 'rgb(245 0 87)', border: 'none'} : {backgroundColor: 'rgb(8 80 125)'}}
                                onClick={() => changeActiveType(index)}>
                                <NavLink to={WATCHES_ROUTE}
                                >
                                    {el.name.toUpperCase()}
                                </NavLink>
                            </Button>
                        )
                    }
                </ButtonGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        typesOfDevices: state.typesDevices.typesOfDevices,
        activeType: state.typesDevices.activeType
    }
}


export default connect(mapStateToProps, {fetchTypesDevices, changeActiveType})(Sidebar)