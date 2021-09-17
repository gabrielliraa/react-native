import React from 'react'
import {Button, View} from 'react-native'


export default function ButtonLogin(){
    return(

        <Button 
            title='Logar'
            onPress={()=> console.warn('Clicou em logar')}
            color='#1a7487'
        />

    )
}


