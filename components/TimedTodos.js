import React, { Component } from 'react'

import {View ,Text} from 'react-native'
import Circle from './Circle'

export class TimedTodos extends Component {

    state = {
        AllTags : [
            {id : 1 ,
          
                color : '#ee9100'},
        
                {id : 2 ,
                  
                  color : '#a259be'},
        
                  {id : 3 ,
                   
                    color : '#0db970'},
        
                    {id : 4 ,
                      
                      color : '#00ae97'},
        
                      {id : 5 ,
                       
                        color : '#384e64'},
        
                        {id : 6 ,
                         
                          color : '#34a8e3'},
        
                          {id : 7 ,
                           
                            color : '#2792c8'},
        
                            {id : 8 ,
                              
                              color : '#f16243'},
        
        ]
    }


    render() {
        return (
            <View style ={{marginTop : 32 , marginLeft : 32  , width : 220 }}>

                <Text style= {{fontSize : 16 , marginLeft : 32 , marginBottom : -6 , fontFamily :'GilroyMedium'}}>{this.props.item.title}</Text>
                <Circle color ={this.state.AllTags.filter(tag => tag.id == this.props.item.tagId)[0].color} ></Circle>
                <Text style ={{marginLeft : 32 , marginTop :-6 , fontFamily : 'GilroyRegular'}}>{this.props.item.time}</Text>

            </View>
        )
    }
}

export default TimedTodos
