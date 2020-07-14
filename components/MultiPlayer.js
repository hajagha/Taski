import React, { Component } from 'react'

import {View , FlatList} from 'react-native'

import Todos from './Todos'

export class MultiPlayer extends Component {

    componentDidMount = () => {
            //fetch single Todos
    }

    state ={ 
        Todos : [
            {
                id : 3,
                title : 'Kill some one',
                time : Date.UTC(),
                single : false
            },
            {
              id : 1,
              title : 'GO TO HELL',
              time : Date.UTC(),
              single : false
          }
        ]
    }


    render() {
        return (
           <View>
               <FlatList data = {this.state.Todos} renderItem = {({item}) => <Todos item = {item}></Todos>}></FlatList>
           </View>
        )
    }
}

export default MultiPlayer
