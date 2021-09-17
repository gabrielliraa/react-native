import React from 'react'
import {Image} from 'react-native'


export default function ImageLogo(){
    return(
        <Image style={{width:400}} resizeMode='contain' source={require('../../../pages/img/logo.jpeg')}></Image>
    )

}
