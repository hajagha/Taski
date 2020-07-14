import React, { Component } from 'react'

import {View , FlatList ,TouchableOpacity , Text , StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import CalenderItem from './CalenderItem';

export class HeaderHomePage extends Component {
    state = {
        name : 'Blyat',
        date : new Date(),
        day : '' ,
        month : '',
        upCommingDates : [],
       
        
    }



    componentDidMount = async () => {
        
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayss = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"]

        this.setState({day :days[this.state.date.getDay()]})

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.setState({month :months[this.state.date.getMonth()]})
        let i = 7
        let List = []
        while(i >= -8)
        {

            var currentDate = new Date(new Date().getTime() - i*(24 * 60 * 60 * 1000));
            const newDate = {
                day : dayss[[currentDate.getDay()]],
                month : months[currentDate.getMonth()],
                date : currentDate.getDate(),
                bool : '#040d39'
            
            }
           
            
            List.push(newDate)

            this.setState({upCommingDates: List})
            i = i - 1
            
        }
        
        

       
        
        this.setState({upCommingDates : List})
         

    }

    render() {
        console.log('wtf')
        
        
        return (
            
            <View style = {{height : 197 , opacity :  this.props.modal ? 0.9 : 1 , backgroundColor : this.props.modal ? '#050c3ccc' : '#040d39', fontSize : 15}}>
                
                <Text style = {styles.welcomeText}>{`Hello ${this.state.name}!`}</Text>
                <Text style = {styles.date}>{this.state.day} {this.state.date.getDate()} {this.state.month}</Text>
                <FlatList  keyExtractor={(item, index) => item.date} horizontal ={true} getItemLayout = {(data , index) =>({length: 52 , offset : 52 * index , index })} initialScrollIndex = {6.90} style = {{marginLeft : 16 , marginRight : 16 , marginTop : 32}} data = {this.state.upCommingDates} renderItem = {({item}) => <CalenderItem modal ={this.props.modal} item = {item} showTasks ={this.props.showTasks} sd = {this.props.selectedDate}></CalenderItem>}></FlatList>
            </View>
        )
    }
}

export default HeaderHomePage


const styles = StyleSheet.create({
    welcomeText : {
        
        fontFamily : 'GilroyRegular',
        fontSize : 13 ,
        marginTop : 23 ,
        color : '#ffffff',
        marginLeft : 30
    },
    view : {
        
      
    },
    date : {
        color : '#ffffff',
        fontFamily : 'GilroyRegular' ,
        marginLeft : 30,
        marginTop : 4,
        fontSize :20
    }
})