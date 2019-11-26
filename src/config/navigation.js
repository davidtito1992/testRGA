import React from 'react';
import i18next from 'i18next';
import Routes from '@constants/routes';
import {blue, white, transparent} from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import {isIos, isAndroid} from '@constants/platform';
import BackButtonImage from '@components/BackButtonImage';
import CustomText from '@components/CustomText';

// Default nav options for all screens
const defaultNavOptions = ({navigation}) => ({
  // Change screen title from i18n traslates files
  // headerTitle: i18next.t(`app:${navigation.state.routeName}`),
  // TODO: The following options are examples. Change them to your need
  /*  headerStyle: {
    backgroundColor: transparent,
  },
  headerBackTitleStyle: {
    color: transparent,
  }, */
  // headerTitleStyle: {
  //   color: transparent,
  // TODO: If you want to change the header font, apply these options
  // Replace the font with the need
  // See: https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e
  // fontWeight: 'normal',
  // fontFamily: 'Lato-Bold'
  // },
  // headerTintColor: transparent,

  headerBackImage: BackButtonImage,
  headerTitle: function customHeader(props) {
    return <CustomText h2 {...props} />;
  },
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 70,
    marginLeft: isIos * 10,
    paddingTop: isAndroid * 20,
  }, 
});

export const mainSwitchNavConfig = {
  initialRouteName: Routes.InitialLoading,
};

export const authStackNavConfig = {
  defaultNavigationOptions: defaultNavOptions,
  initialRouteName: Routes.Login,
};

export const appStackNavConfig = {
  defaultNavigationOptions: defaultNavOptions,
  initialRouteName: Routes.Home,
};

// Default nav options for all screens
export const appScreensNavOptions = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  /*
  [Routes.Home]: {
    headerTitle: 'Home'
  }
  */
  [Routes.Home]: {
    headerTransparent: true
  }
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Login]: statusBarConfig.transparentStatusBar,
  [Routes.InitialLoading]: statusBarConfig.whiteStatusBar,
  [Routes.Home]: statusBarConfig.transparentStatusBar,
  default: statusBarConfig.transparentStatusBar,
};
