import React from 'react'
import {View, StyleSheet} from 'react-native'
import ButtonLogin from '../../atoms/Buttons/ButtonLog/Index'
import ButtonSenha from '../../atoms/Buttons/ButtonSenha/Index'
import TextInputEmail from '../../atoms/TextInput/TextInputEmail/TextInputEmail'
import TextInputSenha from '../../atoms/TextInput/TextInputSenha/TextInputSenha'
export default function Formulario(){
    return(
        <View style={styles.formulario}>
            <TextInputEmail/>
            <TextInputSenha/>
            <ButtonLogin/>
            <ButtonSenha/>
      </View>
    )
}


const styles = StyleSheet.create({

    formulario:{
      justifyContent: 'center',
      alignItems:'center',
      width:'90%'
    }
  })