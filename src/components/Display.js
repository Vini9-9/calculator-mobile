import React, { useState } from 'react' 
import { View, Text, StyleSheet, Dimensions } from 'react-native'  

import Button from './Button'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#000',
    },
    displayValue: {
        fontSize: 60,
        color: 'white'
    }
}) 

export default (props) => {  
    const valorDisplay = props.value || '0'

    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}
            numberOfLines={1}> {valorDisplay} </Text>
        </View>
    )
}

