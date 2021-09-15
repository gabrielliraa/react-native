import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, SafeAreaView, Image, Animated, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'




export default function Home({navigation}) { 

    const [altura, setAltura] = useState(new Animated.Value(0))
    const [largura, setLargura] = useState(new Animated.Value(0))
    const [eixoY, setEixoY] = useState(new Animated.Value(0))

    

    Animated.timing(
        largura, 
        {
            toValue: 400,
            duration: 2000
        }
    ).start()
    
    Animated.timing(
        altura, 
        {
            toValue: 450,
            duration: 2000
        }
    ).start()



  return(
    <SafeAreaView>
        <Animated.View 
        style={[
            styles.header,
            {
                height:eixoY.interpolate({
                    inputRange:[0,60,100],
                    outputRange:[60,0,0],
                    extrapolate: 'clamp'
                }),
                opacity:eixoY.interpolate({
                    inputRange:[1,75,170],
                    outputRange:[1,1,0],
                    extrapolate: 'clamp'
                }),
            }
            ]}>
            <Image 
            source={require('../assets/img/logo.jpeg')} 
            style={{width:40, height:40}}
            resizeMode='contain'
            />

            <Text style={{color:'#FFF', fontSize:17}}>Aplicativo React</Text>
            <Button 
                title='Sair'
                onPress={()=> navigation.navigate('Login')}
                color='red'
            />


        </Animated.View>


        <ScrollView
            scrollEventThrottle={16}
            onScroll={
                Animated.event([{
                    nativeEvent:{contentOffset:{y:eixoY}},

                }],
                    {useNativeDriver:false}
                )
            }
        >
            <Animated.View style={{
                height:altura,
                width: largura,
                backgroundColor: '#dadadb',
                marginBottom:20,
            }}>


            </Animated.View>

            <Animated.View style={{
                height:altura,
                width: largura,
                backgroundColor: '#dadadb',
                marginBottom:20,
            }}>


            </Animated.View>
        </ScrollView>
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


