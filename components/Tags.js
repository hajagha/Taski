import React, { Component } from 'react'

import {View , Text , TouchableOpacity} from 'react-native'


export class Tags extends Component {

    state = {
        Alltags : [
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
    
                        
          ] ,
    }


    render() {
        console.log(this.props.item)
        return (
            <TouchableOpacity style ={{backgroundColor : 'black' , height : 38 , width : 90 , marginLeft : 24 , borderRadius : 15 , alignContent : 'center'}}>
                <Text style ={{fontFamily : 'GilroyMedium' , fontSize :18 , color : 'white' , alignContent : 'center' , textAlign : 'center'}}>{this.props.item.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default Tags
