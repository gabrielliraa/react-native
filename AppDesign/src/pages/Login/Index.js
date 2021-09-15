import React from 'react'
import {View, Text, StyleSheet, Button, KeyboardAvoidingView,Image} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


export default function Login({navigation}) { 
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image style={{width:400}} resizeMode='contain' source={require('../assets/img/logo.jpeg')}></Image>
      </View>

      <View style={styles.formulario}>

        <TextInput 
          style={styles.input}
          type='email'
          placeholder='Usuário'
          dataCorrect={false}
          onChangeText={() =>{}}
        ></TextInput>

        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder='Senha'
          dataCorrect={false}
          onChangeText={() =>{}}
        ></TextInput>

        <Button 
            title='Logar'
            onPress={()=> navigation.navigate('Home')}
            color='#1a7487'
        />

        <Button 
                title='Recuperar senha'
                onPress={()=> navigation.navigate('Login')}
                color='black'
                
            />
      </View>
      
    </KeyboardAvoidingView>
    
  )
}


const styles = StyleSheet.create({


    background:{
      flex:1,
      backgroundColor: 'black',
      alignItems:'center',
      justifyContent: 'center',
    },
    logo:{
      justifyContent:'center'
    },
    formulario:{
      justifyContent: 'center',
      alignItems:'center',
      width:'90%'
    },
    input:{
      backgroundColor:'#FFF',
      marginBottom: 15,
      color: '#222',
      fontSize:17,
      borderRadius:7,
      width:'90%',
      padding:10
    },

    botao:{
      backgroundColor:'#1a7487',
      height:45,
      width:'90%',
      alignItems:'center',
      justifyContent:'center',
      padding:10,

    },
})