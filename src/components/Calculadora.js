import React, { useState } from 'react' 
import { View, Text, StyleSheet } from 'react-native'  

import Button from './Button'
import Display from './Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIdx: 0
} 

export default class Calculadora extends React.Component { 

    state = {...initialState}

    addDigit = (n) => {
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay 
        
        if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if(n !== '.'){
            const novoValor = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.currentIdx] = novoValor
            this.setState({ values })
        }
    }

    clearMemory = () => {
        this.setState({...initialState})
    }

    setOperation = (operation) => {
        if(this.state.currentIdx === 0){
            this.state.values[this.state.currentIdx] = this.state.displayValue
            const values = this.state.values
            this.setState({values, operation, currentIdx: 1, clearDisplay: true})
        } else {
            const igual = operation === '='
            const values = [...this.state.values]
            try {
                values[0] = eval(` ${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (error) {
                values[0] = this.state.values[0]
            }

            values[1] = 0
            this.setState({
                values, clearDisplay: true, 
                displayValue: `${values[0]}`,
                operation: igual ? null : operation,
                currentIdx: igual ? 0 : 1
            })
        }

        // mudar o useState para o idx 1
        // com exceção do igual
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
                    <Button label="+" estilo={['operationButton']} OnClick={() => this.setOperation('+')}/>
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