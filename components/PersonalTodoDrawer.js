import React, { Component } from 'react'

import {View , Button} from 'react-native'

export class PersonalTodoDrawer extends Component {
    render() {



        goToPersonalTodos = () => {
            this.props.navigator.navigate('PersonalTodos')
        }


        return (
            <View>
                <Button title='Go To My Todos' onPress ={() => goToPersonalTodos}/>
            </View>
        )
    }
}

export default PersonalTodoDrawer
