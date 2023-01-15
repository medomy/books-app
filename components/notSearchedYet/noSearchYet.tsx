import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function NoSearchYet() {
  return (
    <View style={styles.notSearchedContauner}>
      <Text>You have not searched for books yet</Text>
    </View>
  )
}