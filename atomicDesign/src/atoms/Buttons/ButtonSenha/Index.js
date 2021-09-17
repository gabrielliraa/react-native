import React from 'react'
import {Button, View} from 'react-native'


export default function ButtonSenha(){
    return(
        <Button 
                title='Recuperar senha'
                onPress={()=> console.warn('Clicou Recuperar Senha')}
                color='black'
                
        />
    )

}