import React from 'react'

import {View , StyleSheet} from 'react-native'


const FixedFooter = ({children1}) =>{
    return(
        <View style ={styles.container}>
            {children1 && React.cloneElement(children1 , {style : style.btn})}
        </View>
        )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : 'black' ,
        position : 'absolute',
        bottom : 10 ,
        left : 0,
        right : 20 ,
        padding : 20,
        height : 80
    },
    btn : {
        height : '100%',
        justifyContent : 'center'
    }
})


export default FixedFooter