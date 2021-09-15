import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'


export default function Clientes({navigation}) { 
  return(
    <View style={styles.Container}>
      <Text style={styles.conteudo}>Clientes</Text>
      <Button 
            title='Produtos'
            onPress={()=> navigation.navigate('Produtos', {nome: 'Gabriel Lira'})}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    conteudo:{
        fontSize: 35
    }
})