import React from 'react'
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native'

import Formulario from '../../molecules/Formulario/Index'
import Logo from '../../molecules/Logo/Index'


export default function LoginTemplate(){
    return(
    <KeyboardAvoidingView style={styles.background}>
    
        <Logo/>
        <Formulario/>
      
    </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({


    background:{
      flex:1,
      backgroundColor: 'black',
      alignItems:'center',
      justifyContent: 'center',
    }
  })