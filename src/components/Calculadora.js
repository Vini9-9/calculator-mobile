import React, { useState } from 'react' 
import { View, Text, StyleSheet } from 'react-native'  

import Button from './Button'
import Display from './Display'

export default class Calculadora extends React.Component {  

    state = {
        displayValue: '0'
    }
    
    criarBotoes = (arr, ...estilo) => {
        const estiloValor = estilo
        
        return arr.map((el, idx) => {
            return <Button key={`${idx}`} label={el} estilo={estiloValor}></Button>
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

        return this.criarBotoes(opTeclado, 'operationButton')

    }

    render () {
        return (
            <>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label="AC"/>
                    {this.gerarNumerosTeclado()}
                    <Button label="."/>
                    {this.gerarOperadoresTeclado()}
                </View>
            </>
        )
    }

}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
}) 