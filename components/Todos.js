import React, { Component } from 'react'

import {TouchableOpacity, Text ,View ,StyleSheet} from 'react-native'

import {Card } from 'react-native-elements'
import { color } from 'react-native-reanimated'
import { Icon } from 'react-native-elements'


  



export class Todos extends Component {

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

                  
    ],
    usedTags : [] ,

  }


  componentDidMount = () => {
    
    
    
  }

    render() {
        
        return (
            <TouchableOpacity  style = {{backgroundColor : this.state.AllTags.filter(tag => tag.id == this.props.item.tagId)[0].color   , borderRadius : 15, height: 100,  width: 140,padding : 16, marginRight : 10, justifyContent : 'flex-start'}}  >  
                <View  style = {style.view} >
                        
                        <Text style ={style.text} >{this.props.item.title}</Text>
                    
                </View>
            </TouchableOpacity>
        )
    }
}


const style = StyleSheet.create({
  
  view : {
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'flex-start'
  },
  text : {
    fontFamily : 'GilroyMedium' ,
    fontSize : 14 ,
    color : '#ffffff',
    alignItems : 'flex-start',
    
  }
})

export default Todos
