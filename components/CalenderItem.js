import React, { Component } from 'react'

import {TouchableOpacity , View, Text , StyleSheet} from 'react-native'

export class CalenderItem extends Component {
    state = {
       
    }
    render() {
        
        return (
            
            <View>
                <TouchableOpacity style = {{width : 52 , height : 64 , margin : 8 , borderRadius : 16 , alignItems : 'center', backgroundColor : this.props.sd == this.props.item.date ? '#0091ff' : '#040d39' }} onPress ={ () => this.props.showTasks(this.props.item.date)}>
                    <Text style = {styles.number}>{this.props.item.date}</Text>
                    <Text style = {styles.text}>{this.props.item.day}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touch : {
        marginLeft : 20 ,
        height : 64 ,
        width : 52,
        borderRadius: 16,
        alignItems : 'center'
    },


    number : {
        fontFamily : 'GilroyMedium' ,
        marginTop : 12 ,
        fontSize : 16,
        alignItems : 'center',
        color : '#ffffff'
    },

    text : {
        fontFamily : 'GilroyMedium' ,
        marginTop : 6 ,
        fontSize : 12 ,
        color : '#ffffff',
        alignItems : 'center'
    }
})

export default CalenderItem
