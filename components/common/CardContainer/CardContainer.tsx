import React, { Component } from 'react'
import { View, ViewStyle, StyleProp } from 'react-native'

import styles from './styles'

type OwnProps = {
  children: any
  style?: StyleProp<ViewStyle>
}

type Props = OwnProps

class CardContainer extends Component<Props> {
  render() {
    const { children, style = {} } = this.props

    return <View style={[styles.container, style]}>{children}</View>
  }
}

export default CardContainer
