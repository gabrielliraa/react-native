import 'react-native-gesture-handler'
import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import  {Swipeable}  from 'react-native-gesture-handler/';


function PuxarEsquerda() {
    return(
        <View>
            <Text>Deletar</Text>
        </View>
    )
}


export default function ListItem({data}) { 
  return(
    <Swipeable 
        renderLeftActions={PuxarEsquerda}
    >
        <View style={styles.Container}>
            
            <Text style={styles.texto}>{data.nome}</Text>


        </View>
    </Swipeable>
  )

}


const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#FFF',
        paddingHorizontal:10,
        paddingVertical:20,
        
    },

    texto:{
        color: '#222',
        fontSize:17,
    }
})
