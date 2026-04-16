// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import { AppRegistry } from 'react-native';
import MyDash from './MyDash';  // adjust if in a folder: './src/MyDash'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MyDash);
