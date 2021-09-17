import React from 'react'
import {TextInput, StyleSheet} from 'react-native'


export default function TextInputSenha(){
    return(
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder='Senha'
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