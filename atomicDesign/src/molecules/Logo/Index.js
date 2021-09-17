import React from 'react'
import {View, KeyboardAvoidingView, TextInput,Button,Image, StyleSheet} from 'react-native'
import ImageLogo from '../../atoms/Image/ImageLogo/ImageLogo'

export default function Logo(){
    return(
        <View style={styles.logo}>
            <ImageLogo/>
        </View>
    )
}


const styles = StyleSheet.create({
    logo:{
      justifyContent:'center'
    }
  })
