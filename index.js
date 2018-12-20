import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import App from './App';

import LoginScreen from './screen/LoginScreen';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'LoginScreen' };
    }
    render() {
        let mainScreen = <LoginScreen />
        return mainScreen
    }
}
AppRegistry.registerComponent('nosh', () => Main);