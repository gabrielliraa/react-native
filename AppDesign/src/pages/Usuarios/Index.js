
import React from 'react'
import {View, Text, StyleSheet, Button, SafeAreaView, Image, FlatList,} from 'react-native'
import ListItem from '../../components/ListItem/Index'




export default function Usuarios({route, navigation}) {

    const usuarios = [
        {id:'1', nome:'Rizael Junior'},
        {id:'2', nome:'Rafael Roque'},
        {id:'3', nome:'Gabriel Lira'},
        {id:'4', nome:'Vitor Andrade'},
        {id:'5', nome:'Marcelo Santos'},
    ]
  return(
    <SafeAreaView>
        <View 
        style={
            styles.header
            }>
            <Image 
            source={require('../assets/img/logo.jpeg')} 
            style={{width:40, height:40}}
            resizeMode='contain'
            />

            <Text style={{color:'#FFF', fontSize:17}}>Lista de Usuários</Text>

            <Button 
                title='Sair'
                onPress={()=> navigation.navigate('Login')}
                color='red'
            />
        </View>


            <View>
                <FlatList
                    data={usuarios}
                    keyExtractor = {item => item.id}
                    renderItem = {({item}) => (<ListItem  data={item}/>)}
                    ItemSeparatorComponent={()=> <Separator/>}
                >

                </FlatList>
            </View>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor:'#000',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth: 2,
        borderBottomColor:'#FFF',
        
    },
})

const Separator = () => <View style={{flex:1, height:1, backgroundColor:'#DDD'}}></View>