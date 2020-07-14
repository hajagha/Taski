import React, { Component } from 'react'

import {View, StyleSheet ,  TextInput} from 'react-native'

import { Input , Card , Icon , Button} from 'react-native-elements';

export class Register extends Component {

    state = {
        Email : '' ,
        Password : '',
        Name : ''
    }



    ChangeEmail = (text) => {
        this.setState({Email : text})
        
    }

    ChangePassword = (text) => {
        this.setState({Password : text})
        
    }


    ChangeName = (text) => {
        this.setState({Name : text})
        
    }



    

    


    render() {
        return (
            <View>
                <Icon containerStyle ={{textalign : 'center' , marginTop : 10 , paddingTop : 40 }} type = 'feather' name = 'user-plus'  size ={50}></Icon>
                <Card containerStyle = {{marginTop : 100}}>
                    <Input placeholder='Enter Your Email' leftIcon={{ type: 'zocial', name: 'email' }} onChangeText = {this.ChangeEmail} value = {this.state.Email}/>
                    <Input placeholder='Enter Your Name' leftIcon={{ type: 'font-awesome', name: 'id-card' }}  onChangeText = {this.ChangeName} value = {this.state.Name}/>
                    <Input placeholder='Choose a Password' leftIcon={{ type: 'font-awesome', name: 'lock' }}  onChangeText = {this.ChangePassword} value = {this.state.Password}/>
                    <Button  icon = {<Icon name ='rocket'  type = 'font-awesome'></Icon>} onPress = {() => this.props.SendRegister(this.state.Email , this.state.Name , this.state.Password )}></Button>
                </Card>
                
            </View>
        )
    }
}

export default Register
