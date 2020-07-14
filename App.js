import React, { Component } from 'react'
import { View , Text , FlatList  } from 'react-native'
import HomeScreen from './components/Home'
import Login from './components/Login'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PersonalTodos from './components/PersonalTodo'
import PersonalTodosDrawer from './components/PersonalTodoDrawer'


import Add from './components/Add'


import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'

import Register from './components/Register'
import { set } from 'react-native-reanimated';
import UpComingTodos from './components/HomePage';
import {Icon} from 'react-native-elements'



import MultiPlayer from './components/MultiPlayer'



const Tabs = createBottomTabNavigator()
export default class App extends Component {

  state = {
    isSignedIn : false
  }


  SendRegister = (email , name , pass) => {
    console.log(name)
     if(email && name && pass) 
     {
        this.setState({isSignedIn : true})
        
     }
  }
  
  render() {


  
    
    

    return (
    
      
    
      <UpComingTodos></UpComingTodos>
      
    
     
    )
    
  }
}


// this.state.isSignedIn ?
// (
//   <View>
//     <Dashboard></Dashboard>
//   </View>
  
// ) : (
//   <View>
//     <Register SendRegister = {this.SendRegister}></Register>
//   </View>
// )
// )