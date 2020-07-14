import React, { Component } from 'react'

import {Text} from 'react-native'

export class FuckingText extends Component {
    render() {
        return (
        <Text>{this.props.item.text}</Text>
        )
    }
}

export default FuckingText
