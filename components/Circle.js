import React, { Component } from 'react'
import { View } from 'react-native'



export class Circle extends Component {
    render() {
        return (
            <View style= {{width :16 , height : 16 , borderRadius : 100/2 , backgroundColor :this.props.color}}></View>
        )
    }
}

export default Circle
