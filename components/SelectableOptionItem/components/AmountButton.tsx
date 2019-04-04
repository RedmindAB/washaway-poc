import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
// @ts-ignore
import { Ionicons } from '@expo/vector-icons'

import colors from '../../../util/colors'

type OwnProps = {
  onPress: () => void
  iconName: string
}

type Props = OwnProps

const BUTTON_SIZE = 32
const BUTTON_RADIUS = BUTTON_SIZE / 2

class AmountButton extends Component<Props> {
  render() {
    const { onPress, iconName } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            height: BUTTON_SIZE,
            width: BUTTON_SIZE,
            borderRadius: BUTTON_RADIUS,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.indicator,
              height: BUTTON_SIZE,
              width: BUTTON_SIZE,
              borderRadius: BUTTON_RADIUS,
              opacity: 0.4,
              position: 'absolute'
            }}
          />
          <Ionicons name={iconName} size={BUTTON_SIZE * 0.7} color="white" />
        </View>
      </TouchableOpacity>
    )
  }
}

export default AmountButton
