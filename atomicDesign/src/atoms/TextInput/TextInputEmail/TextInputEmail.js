import React from 'react'
import {TextInput, StyleSheet} from 'react-native'


export default function TextInputEmail(){
    return(
        <TextInput 
          style={styles.input}
          type='email'
          placeholder='Usuário'
          dataCorrect={false}
          onChangeText={() =>{}}
        ></TextInput>
    )

}


const styles = StyleSheet.create({

    input:{
      backgroundColor:'#FFF',
      marginBottom: 15,
      color: '#222',
      fontSize:17,
      borderRadius:7,
      width:'90%',
      padding:10
    },
  
  })