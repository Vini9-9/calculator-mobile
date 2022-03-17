import React from 'react' 
import { Text } from 'react-native'  

import Button from './Button'

export default class Calculadora extends React.Component {  
    
    criarBotoes = (arr) => {
        return arr.map(el => {
            return <Button label={el} ></Button>
        })
    }
    
    gerarNumerosTeclado = () => {
        const numsTeclado = []

        for (let index = 0; index <= 9; index++) {
            numsTeclado.push(index)
        }

        return this.criarBotoes(numsTeclado) 
    }

    gerarOperadoresTeclado = () => {
        const opTeclado = ['/','*','-','+','=']

        return this.criarBotoes(opTeclado)
    }

    render () {
        return (
            <>
                <Text>Hello mundo</Text>
                <Button label="AC"/>
                {this.gerarNumerosTeclado()}
                <Button label="."/>
                {this.gerarOperadoresTeclado()}
            </>
        )
    }

}