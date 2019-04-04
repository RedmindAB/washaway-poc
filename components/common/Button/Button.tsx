import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

type OwnProps = {
  title: string
  onPress: () => void
}

type Props = OwnProps

class Button extends Component<Props> {
  render() {
    const { title, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button
