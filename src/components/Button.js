import React from "react"
import { Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4) * 2
    }, 
    buttonTriple: {
        width: (Dimensions.get('window').width/4) * 3
    }
})

export default props => {
    const estilos = [styles.button]
    
    if(props.estilo){
        const estilosProp = props.estilo
        estilosProp.forEach(e => {
            estilos.push(styles[`${e}`])
        });
    }

    return (
        <TouchableHighlight onPress={props.OnClick}>
            <Text style={estilos}> {props.label} </Text>
        </TouchableHighlight>
    )
}

