import React, { Component } from 'react'

import {View ,Modal , TextInput , TouchableOpacity , Text} from 'react-native'

import {} from 'react-native-elements'

import DateTimePicker from '@react-native-community/datetimepicker'

export class Add extends Component {


    componentDidMount = () => 
    {
        this.setState({modalVisible :true})
    }



    setTime = () => {
        console.log('wtf')
        this.setState({showTime : true})
    }


    state = {
        modalVisible : true,
        task : '',
        showTime : false
    }

    render() {
        return (
            <View >
            <Modal animationType = "slide" transparent ={true} visible ={this.state.modalVisible}  >
                <View style ={{height: 280,width: 327,backgroundColor: '#ffffff',borderRadius: 25 , marginLeft : 32 , marginTop : 217}}>
                    <TextInput style ={{margin: 24 ,height : 44, borderRadius : 15 , width : 279 , backgroundColor : "#f0f2ff" , fontFamily :'GilroyMedium' , fontSize : 20 , alignContent : 'center' , textAlign : 'center' }} value = {this.state.task} onChangeText ={text => this.setState({task : text})}></TextInput>
                    <TouchableOpacity style = {{ borderColor : '#f0f2ff' , borderStyle : 'solid' , borderWidth : 1  , padding : 20 }}>
                        <Text style ={{textAlign : 'center' ,fontSize : 20 ,color : '#727aa4' ,marginTop : 32}} onPress ={() => this.setTime}>Date and Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ borderColor : '#f0f2ff' , borderStyle : 'solid' , borderWidth : 1  , padding : 20 }}>
                        <Text style ={{ fontFamily :'GilroyMedium' , fontSize : 20 ,color : '#727aa4' ,alignContent : 'center' , textAlign : 'center'}} onPress ={() => this.setState({modalVisible : false})} >Done</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
        )
    }
}

export default Add
