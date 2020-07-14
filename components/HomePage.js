import React, { Component } from 'react'

import {FlatList , View, Modal  ,StyleSheet ,TouchableHighlight, TouchableOpacity , Alert, ScrollView, TextInput } from 'react-native'

import {ListItem} from 'react-native-elements'

import DateTimePickerModal from "react-native-modal-datetime-picker";





import {Button , Input , Icon , Text} from 'react-native-elements'

import ToDos from './Todos'

import FixedFooter from './FixedFooter'


import HeaderHomePage from './HeaderHomePage';
import TimedTodos from './TimedTodos';
import Scrooli from './Scrooli';
import FuckingText from './FuckingText';
import Tags from './Tags';


export class HomePage extends Component {

    state = {

      usedTags : [
        {
          tagId : 1 ,
          name : 'Design'
        },
        {
          tagId : 2 ,
          name : 'Daily'
        },
        {
          tagId : 3 ,
          name : 'Home'
        },
        {
          tagId : 4 ,
          name : 'Art'
        }
      ],

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
        modalText : '',
        EditTodoId : '',
        modal : false ,
        numberOfTagColors : 0 ,
        selectedDate : '',
        dateOpen : false ,
        floating : [
            {
                id : 1,
                title : 'Fuck Some Pussy',
                time : Date.UTC(),
                floating : false,
                tagId : 1,
                
            },
            {
                id : 2,
                title : 'Have Some Vodka',
                time : Date.UTC(),
                floating : true,
                tagId : 3,
                
            },
            {
              id : 3,
              title : 'Kill some one',
              time : Date.UTC(),
              floating : true,
              tagId : 2,
              
          },
          {
            id : 4,
            title : 'GO TO HELL',
            time : Date.UTC(),
            floating : true,
            tagId : 2,
            
        },
        {
          id : 5,
          title : 'GO TO HELL mother fucker',
          time : Date.UTC(),
          floating : true,
          tagId : 3,
          
      },
      {
        id : 6,
        title : 'Fuck Some Pussy',
        time : Date.UTC(),
        floating : false,
        tagId : 1,
        
    },
    {
        id : 7,
        title : 'Have Some Vodka',
        time : Date.UTC(),
        floating : true,
        
        tagId : 3
    },
    {
      id : 8,
      title : 'Kill some one',
      time : Date.UTC(),
      floating : true,
      tagId : 2
  },
  
        
        ],

        data : [
          {type : 'title' 
          , text : 'Floating Tasks' , line : 'ver' , d : ''},

          {type : 'list' ,
            line : 'row'
          , d : [
            {
              id : 1,
              title : 'Fuck Some Pussy',
              time : Date.UTC(),
              floating : false,
              tagId : 1,
              
          },
          {
              id : 2,
              title : 'Have Some Vodka',
              time : Date.UTC(),
              floating : true,
              tagId : 3,
              
          },
          {
            id : 3,
            title : 'Kill some one',
            time : Date.UTC(),
            floating : true,
            tagId : 2,
            
        },
        {
          id : 4,
          title : 'GO TO HELL',
          time : Date.UTC(),
          floating : true,
          tagId : 2,
          
      },
      {
        id : 5,
        title : 'GO TO HELL mother fucker',
        time : Date.UTC(),
        floating : true,
        tagId : 3,
        
    },
    {
      id : 6,
      title : 'Fuck Some Pussy',
      time : Date.UTC(),
      floating : false,
      tagId : 1,
      
  },
  {
      id : 7,
      title : 'Have Some Vodka',
      time : Date.UTC(),
      floating : true,
      
      tagId : 3
  },
  {
    id : 8,
    title : 'Kill some one',
    time : Date.UTC(),
    floating : true,
    tagId : 2
},
          ]},
        {type : 'title' , text : 'Todos' , line : 'ver' , d : ''},
      

        
        
        
        
        {type : 'list', line : 'col' , d : [

        ]}


        ],


        todos : [
          {
            id : 1,
            title : 'Sketching',
            floating : false,
            
            tagId : 1,
            date: '12',
            time : '11:30',
            month : 'July',
            
        },
        {
          id : 2,
          title : 'Meditate',
          time : Date.UTC(),
          floating : false,
          
          tagId : '2',
          date: '12',
          time : '8:30',
          month : 'July',
      },
      {
        id : 3,
        title : 'Meditate',
        time : Date.UTC(),
        floating : false,
        
        tagId : 2,
        date: '12',
        time : '8:30',
        month : 'July',
    },
    {
      id : 4,
      title : 'Meditate',
      time : Date.UTC(),
      floating : false,
      
      tagId : 2,
      date: '12',
      time : '8:30',
      month : 'July',
  },
  {
    id : 5,
    title : 'Meditate',
    time : Date.UTC(),
    floating : false,
    
    tagId : 2,
    date: '12',
    time : '8:30',
    month : 'July',
},
{
  id : 6,
  title : 'Meditate',
  time : Date.UTC(),
  floating : false,
  
  tagId : 2,
  date: '12',
  time : '8:30',
  month : 'July',
},
      {
        id : 7,
        title : 'Buy Eggs',
        time : Date.UTC(),
        floating : false,
        
        tagId : 3,
        date: '13',
        time : '13:00',
        month : 'July',
    },
      {
        id : 8,
        title : 'Front',
        time : Date.UTC(),
        floating : false,
        
        tagId : 1,
        date: '13',
        time : '16:00',
        month : 'July',
    },
    
  {
    id : 9,
    title : 'Draw a pic',
    time : Date.UTC(),
    floating : false,
    
    tagId : 4,
    date: '13',
    time : '12:00',
    month : 'July',
},
{
  id : 10,
  title : 'Ui Design',
  time : Date.UTC(),
  floating : false,
  
  tagId : 1,
  date: '13',
  time : '10:00',
  month : 'July',
},
{
  id : 11,
  title : 'My dick is very bigggg boyyyyy',
  floating : false,
  
  tagId : 1,
  date: '12',
  time : '16:20',
  month : 'July',
  
},




        
        ],

        showen : [] ,
        scroll : [
          <TimedTodos color ={'#00aae9'}  text ={'Design'}></TimedTodos>,
          <TimedTodos color ={'#00aae9'}  text ={'sdd'}></TimedTodos>,
          <TimedTodos color ={'#00aae9'}  text ={'Dasdn'}></TimedTodos>,
          <TimedTodos color ={'#00aae9'}  text ={'Dasdasdn'}></TimedTodos>,
          <TimedTodos color ={'#00aae9'}  text ={'Dasdasdign'}></TimedTodos>,
          <TimedTodos color ={'#00aae9'}  text ={'asdasdgn'}></TimedTodos>,

        ]
        
       
    }

   componentDidMount = () => {

        //fetch upcomming events
        //push to state
        const today = new Date().getDate()
        this.setState({selectedDate : today})
        let list = this.state.todos.filter(item => item.date == today)
        let DATA = this.state.data
        DATA[3].d = list
        this.setState({data : DATA})


        this.setState({showen : list})
       
        

   }



   addTasks = () => {
     this.setState({modal : false})
   }



   showModal = () => {
     console.log('modal clicked')
      this.setState({modal : true})
   }






   setTime = () => {
     console.log('open the shit')
     this.setState({selectedDate : new Date()})
     this.setState({dateOpen : true})
   }



   setDate = (selected) => {
     
     console.log(selected)
     this.setState({dateOpen : false})
   }


   onCancel = () =>
   {
     this.setState({dateOpen : false})
   }




   EditTodos = (id) => {
       this.setState({modal : true})
        console.log(id)
        this.setState({EditTodoId : id})
   }


   EditModal =() => {
       
       const todos = this.state.toDos
       let edit = todos.filter(item => item.id == this.state.EditTodoId)
       let nonedit = todos.filter(item => item.id != this.state.EditTodoId)
    //    console.log('edit' , edit)
    //    console.log('nonedit' , nonedit)
       let a = edit[0]
       if(this.state.modalText)
       {
           a.title = this.state.modalText
           
           
       }
       nonedit.push(a)
       
       this.setState({toDos : nonedit})
       this.setState({modal : false})
       


   }


    showTasks = (date) => {
      let list = this.state.todos.filter(item => item.date == date)
      this.setState({selectedDate : date})
      let D = this.state.data
      D[3].d = list
      this.setState({data : D })
      this.setState({showen : list})
    }

   





    render() {



        const styles = StyleSheet.create({
            centeredView: {
              flex: 1,
              flexDirection : 'row',
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22
            },
            modalView: {
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 100,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5
            },
            openButton: {
              backgroundColor: "#F194FF",
              borderRadius: 20,
              paddingRight: 50,
              paddingLeft: 50,
              paddingTop : 10,
              paddingBottom : 10,
              elevation: 2
            },
            textStyle: {
              color: "white",
              fontWeight: "bold",
              textAlign: "center"
            },
            modalText: {
              marginBottom: 15,
              textAlign: "center"
            }
          });











          
          
        return (

           
            <View style ={{flex : 1 , backgroundColor : this.state.modal ? '#050c3ccc' : 'white' , opacity : this.state.modal ? 0.99 : 1}}>
                
                <HeaderHomePage  modal ={this.state.modal} showTasks = {this.showTasks}  selectedDate ={this.state.selectedDate}></HeaderHomePage>

                <FlatList style = {{ marginBottom :50  ,paddingBottom : 20}} data = {this.state.data} renderItem ={({item})=> {

                      if(item.type == 'list' && item.line == 'row')
                      return (
                        <View>
                          <FlatList  contentContainerStyle ={{marginLeft : 32 , paddingRight : 48 , marginTop : 32, }} horizontal = {true} data = {item.d} renderItem = {({item}) => <ToDos usedTags ={this.state.usedTags} Alltags ={this.state.Alltags} item ={item}></ToDos>} showsHorizontalScrollIndicator={false}></FlatList>
                        </View>
                      )
                      if(item.type == 'list' && item.line == 'col')
                      return (
                      <View style ={{marginBottom : 60 , paddingBottom : 10}}>
                        <FlatList  style ={{paddingBottom : 100}} data = {item.d} renderItem = {({item}) => <TimedTodos  item ={item} ></TimedTodos>}></FlatList>
                      </View>
                      )    

                      if(item.type == 'title'  )
                      
                     {
                        
                        <View style ={{flex : 1 , height : 100 , margin : 200 ,  backgroundColor : 'black'}}>
                          <Text style= {{color : 'red' , flex : 1  }} >wtf</Text>
                        </View>
                      
                     }

                }}></FlatList>

                <View style ={{backgroundColor : 'white' , position : 'absolute' , bottom : 0 , left : 0 , right : 0 , height : 58 , flexDirection : 'row' , alignItems : 'center' , alignContent : 'center' , flex :1 , justifyContent : "space-evenly"}}>
                  <TouchableOpacity>
                    <Icon type = 'font-awesome' name = 'home'></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon type = 'Ionicons' name = 'add' onPress = {this.showModal}></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon type = 'font-awesome' name = 'lemon-o'></Icon>
                  </TouchableOpacity>
                </View>









                {this.state.modal &&<View style ={{shadowOffset : {width : 10 , height : 10 , shadowColor : 'black'}}} >
                <Modal animationType = "fade"  transparent ={true} visible ={this.state.modalVisible} onRequestClose ={() => this.setState({modal : false})} >
                    <View style ={{height: 280,width: 327,backgroundColor: '#ffffff',borderRadius: 25 , marginLeft : 32 , marginTop : 217 , overflow :"hidden" , shadowRadius : 10 , shadowColor : 'black' , shadowOpacity : 1}}>
                        {/* <TextInput style ={{margin: 24 ,height : 44, borderRadius : 15 , width : 279 , backgroundColor : "#f0f2ff" , fontFamily :'GilroyMedium' , fontSize : 20 , alignContent : 'center' , textAlign : 'center' }} value = {this.state.task} onChangeText ={text => this.setState({task : text})}></TextInput>
                        
                        <TouchableOpacity style = {{ borderColor : '#f0f2ff' , borderStyle : 'solid' , borderWidth : 1  , padding : 20 }}>
                            <Text style ={{textAlign : 'center' ,fontSize : 20 ,color : '#727aa4' ,marginTop : 32}} onPress ={this.setTime}>Date and Time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{ borderColor : '#f0f2ff' , borderStyle : 'solid' , borderWidth : 1  , padding : 20 }}>
                            <Text style ={{ fontFamily :'GilroyMedium' , fontSize : 20 ,color : '#727aa4' ,alignContent : 'center' , textAlign : 'center'}} onPress ={ this.addTasks} >Done</Text>
                        </TouchableOpacity>

                         <DateTimePickerModal value = {this.state.selectedDate} onConfirm = {this.setDate} onCancel ={this.onCancel} mode = 'datetime' isVisible ={this.state.dateOpen} is24Hour = {true} ></DateTimePickerModal> */}
                         <View>
                          <FlatList showsHorizontalScrollIndicator ={false} horizontal ={true} data = {this.state.usedTags} renderItem ={({item}) => <Tags item = {item}></Tags>} ></FlatList>
                        </View>
                    </View>
                </Modal>
            </View>}








                
            </View>

            
            ) 
              
              
                
                
                
            
            
            
        
    }
}

export default HomePage
