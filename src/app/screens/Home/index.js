import React, { useCallback, memo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';

import Home from './layout';

const HomeContainer = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.currentUser);
  const handleLogout = useCallback(() => dispatch(authActions.logout()), [dispatch]);
  const handleReport = useCallback(coords => {
    props.navigation.navigate('Tools')});
  return <Home onLogout={handleLogout} onReport={handleReport} user={currentUser?.user}/>;
};

export default memo(HomeContainer);
