import React, { useState, useRef } from 'react'
import {View, Text, StyleSheet, Button, SafeAreaView, Image, FlatList, ScrollView, Dimensions, ImageBackgroundBase, ImageBackground,} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ListItem from '../../components/ListItem/Index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-snap-carousel'

const {width:larguraTela, height:alturaTela} = Dimensions.get('window')


export default function Produtos({route}) {

    const [lista, setLista] = useState([
        {   title:'Iphone 12 pro max',
            text: 'O Iphone 12 pro max tem a melhor camera de celular do mundo',
            valor:1800,
            img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-stainless-steel-gold_10132020_inline.jpg.large.jpg'
        },

        {   title:'Macbook Pro',
            text: 'O MacBook é o melhor computador para o seu trabalho',
            valor:10000,
            img: 'https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/MacBookPro1919.jpg'
        },

        {   title:'Apple Watch',
            text: 'Saúde e tecnologia no mesmo lugar',
            valor:1800,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-6s-202107_GEO_BR?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1627330088000'
        },
    ])

    const [background, setBackground] = useState(lista[0].img)
    const carouselRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const _renderItem = ({item, index}) => {
        return(
            <View>
                <TouchableOpacity>
                    <Image
                        source= {{uri: item.img}}
                        style={styles.carouselImg}
                    />
                    <Text style={styles.carouselText}>{item.title}</Text>
                    <Icon
                        name = 'play-circle-outline'
                        size={30} color='#FFF'
                        style={styles.carouselIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }

  return(
      <ScrollView style={styles.container}>
        <View style={{flex:1, height:alturaTela}}>
            <View style={{...StyleSheet.absoluteFill, backgroundColor:'#FFF'}}>
                <ImageBackground source={{uri: background}} style={styles.imgBb} blurRadius={4}>
                    <View style={styles.viewSearch} >
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Faça sua busca'
                        />
                        <TouchableOpacity style={styles.icon}>
                            <Icon name='search' color='#000' size={25} />
                        </TouchableOpacity>
                    </View>
                    <Text 
                    style={{color:'#FFF', fontSize:25, fontWeight:'bold',
                    marginLeft:10, marginVertical:10, }}>
                        Ultimos Lançamentos
                    </Text>


                    <View>
                        <Carousel
                            style={styles.slideView}
                            ref= { carouselRef}
                            data = {lista}
                            renderItem={_renderItem}
                            sliderWidth={larguraTela}
                            itemWidth={200}
                            inactiveSlideOpacity={0.5}
                            onSnapToItem = {(index) =>{
                                setBackground(lista[index].img)
                                setActiveIndex(index)
                            }}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.moreInfo}>
                            <View style={{marginTop:10}}>
                                <View style={styles.headerTitleInfo}>
                                    <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                                    <Text style={styles.priceTitle}>R${lista[activeIndex].valor},00</Text>
                                </View>
                                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
                                <Button
                                title='Ler mais'
                                onPress={() => console.warn('CLICOU')}
                                />
                            </View>
                        </View>
                    </ScrollView>

                </ImageBackground>
            </View>
        </View>
      </ScrollView>

  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },

    imgBb:{
        flex:1,
        width:null,
        height:null,
        opacity:1,
        justifyContent: 'flex-start',
        backgroundColor: '#000'
    },

    viewSearch:{
        marginTop:40,
        backgroundColor: '#FFF',
        elevation:10,
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
    },

    input:{
        width: '90%',
        padding: 13,
        paddingLeft: 20,
        fontSize: 17,
    },

    icon:{
        //position:'absolute',
        right: 20,
        top: 15,
    },
    slideView:{
        width: '100%',
        height:450,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carousel:{
        flex:1,
        overflow: 'visible',
    },
    carouselImg:{
        alignSelf: 'center',
        width: 200,
        height: 300,
        borderRadius:12,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    carouselText:{
        padding:15,
        color: '#FFF',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold'
    },
    carouselIcon:{
        position: 'absolute',
        top: 15,
        right: 15,

    },
    moreInfo:{
        backgroundColor:'#FFF',
        width:larguraTela,
        height:alturaTela,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:50
    },

    movieTitle:{
        paddingLeft:15,
        fontSize:22,
        fontWeight:'bold',
        color: '#131313',
        marginBottom:5,
    },

    movieDesc:{
        paddingLeft:15,
        color:'#131313',
        fontWeight: 'bold',
        fontSize:14
    },
    priceTitle:{

    },
    headerTitleInfo:{
        flexDirection:'row',

    },
    priceTitle:{
        paddingLeft:15,
        fontSize:22,
        fontWeight:'bold',
        color: '#087805',
        marginBottom:5,
    },
})

