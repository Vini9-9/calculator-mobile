import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'  

import Button from './Button'

export default class Calculadora extends React.Component {  
    
    criarBotoes = (arr) => {
        return arr.map((el, idx) => {
            return <Button key={`${idx}`} label={el} ></Button>
        })
    }
    
    gerarNumerosTeclado = () => {
        const numsTeclado = []

        for (let index = 9; index >= 0; index--) {
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
            <View style={styles.buttons}>
                <Button label="AC"/>
                {this.gerarNumerosTeclado()}
                <Button label="."/>
                {this.gerarOperadoresTeclado()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
}) 