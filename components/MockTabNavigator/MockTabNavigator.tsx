import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

type OwnProps = {}

type Props = OwnProps

class MockTabNavigator extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.itemActive]}>
          <Text style={styles.text}>Varukorg</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Leverans</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Betalning</Text>
        </View>
      </View>
    )
  }
}

export default MockTabNavigator
