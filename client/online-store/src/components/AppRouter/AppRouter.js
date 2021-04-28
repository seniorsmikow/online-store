import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {checkUserAuth} from '../../Redux/users';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from './Routes';
import {SHOP_MAIN_ROUTE} from './constants';


const AppRouter = ({checkUserAuth, isAuth}) => {

    useEffect(() => {
        checkUserAuth();
    }, [checkUserAuth]);

    return (
        <div>
            <Switch>
                {
                    isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)
                }
                {
                    publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)
                }
                <Redirect to={SHOP_MAIN_ROUTE} />
            </Switch>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      isAuth: state.user.isAuth
    }
  }

export default connect(mapStateToProps, {checkUserAuth})(AppRouter);