import React from "react"
import { View, StyleSheet, Text } from 'react-native'

import Calculadora from "./components/Calculadora"

export default () => (
  <View style={style.App}>
    <Calculadora />
  </View>
)

const style = StyleSheet.create({
  App: {
    flex: 1,
  }
})
 
