import React, { Component } from 'react'

import {View , Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Login'
import { UpComingTodos } from "./HomePage";
const Drawer = createDrawerNavigator()

import Register from './Register'

import Comp from './Comp'


export class Dashboard extends Component {
    render() {
        
        return (
          
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name = 'HomePage' component = {UpComingTodos}/>
                    <Drawer.Screen name = 'Login' component = {Login} />
                </Drawer.Navigator>
            </NavigationContainer>

        )
    }
}

export default Dashboard
