/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Wrapper from './src/Wrapper';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

AppRegistry.registerComponent(appName, () => Wrapper);
