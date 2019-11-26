import {blue, white, gray, green} from './colors';
import {isIos} from './platform';

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: 'dark-content',
    translucent: true,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  blueStatusBar: {barStyle: 'light-content', backgroundColor: blue},
  whiteStatusBar: {barStyle: 'dark-content', backgroundColor: white},
  greenStatusBar: {barStyle: 'light-content', backgroundColor: green}
};

export default statusBarConfig;
