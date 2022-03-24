import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';

const Routing = StackNavigator({
    LOGIN: { screen: LoginScreen },
},
{
    initialRouteName: 'LOGIN',
});

export default Routing;