import React, { useState } from 'react' 
import { View, Text, StyleSheet } from 'react-native'  

import Button from './Button'
import Display from './Display'

export default class Calculadora extends React.Component { 

    state = {
        displayValue: '24'
    }

    addDigit = (n) => {
        this.setState({ displayValue: `${n}` })
    }

    clearMemory = () => {
        this.setState({ displayValue: '0' })
    }

    setOperation = () => {
        
    }
    
    criarBotoesNumericos = (arr, ...estilo) => {
        const estiloValor = estilo

        return arr.map((el, idx) => {
            return <Button key={`${idx}`} label={el} 
            estilo={estiloValor} OnClick={() => this.addDigit(el)}></Button>
        })
        
    }

    criarBotoesOperadores = (arr, ...estilo) => {
        const estiloValor = estilo

        return arr.map((el, idx) => {
            return <Button key={`${idx}`} label={el} 
            estilo={estiloValor} OnClick={() => this.clearMemory()}></Button>
        })
        
    }
    
    gerarNumerosTeclado = () => {
        const numsTeclado = []

        for (let index = 9; index >= 0; index--) {
            numsTeclado.push(index)
        }

        return this.criarBotoesNumericos(numsTeclado) 
    }

    gerarOperadoresTeclado = () => {
        const opTeclado = ['/','*','-','+','=']

        return this.criarBotoesOperadores(opTeclado, 'operationButton')
        
    }

    gerarLinha = (...n) => {
        return this.criarBotoesNumericos(n)
    }

    render () {
        return (
            <>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label="AC" estilo={['buttonTriple']} OnClick={this.clearMemory}/>
                    <Button label="/" estilo={['operationButton']} OnClick={() => this.setOperation('/')}/>
                    {this.gerarLinha(7,8,9)}
                    <Button label="x" estilo={['operationButton']} OnClick={() => this.setOperation('*')}/>
                    {this.gerarLinha(4,5,6)}
                    <Button label="-" estilo={['operationButton']} OnClick={() => this.setOperation('-')}/>
                    {this.gerarLinha(1,2,3)}
                    <Button label="+" estilo={['operationButton']} OnClick={() => this.setOperation('-')}/>
                    <Button label="0" estilo={['buttonDouble']} OnClick={() => this.addDigit(0)}/>
                    <Button label="." OnClick={() => this.addDigit('.')}/>
                    <Button label="=" estilo={['operationButton']} OnClick={() => this.setOperation('=')}/>
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