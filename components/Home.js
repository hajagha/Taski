import React, { Component } from 'react'

import {View , Text} from 'react-native'

export class Home extends Component {
    


    changeMeta = () => {
        this.props.navigation.navigate("Login")
    }


    render() {
        return (
            <View>
                <Text>Hello World</Text>
                <Text onPress = {this.changeMeta} >Go To Login</Text>
            </View>
        )
    }
}

export default Home
