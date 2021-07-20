/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {myStore} from './Features/Store';
import  { Provider } from 'react-redux';

const AppContainer = ()=>{
    return(
        <Provider store={myStore}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
