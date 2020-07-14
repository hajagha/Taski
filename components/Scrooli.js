import React, { Component } from 'react'
import { View , ScrollView} from 'react-native'

export class Scrooli extends Component {
    render() {
        return (
           <View>
               <ScrollView>{this.props.sc}</ScrollView>
           </View>
        )
    }
}

export default Scrooli
