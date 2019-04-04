import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// @ts-ignore
import { Ionicons } from '@expo/vector-icons'

import styles from '../styles'

type OwnProps = {
  title: string
  iconName: string
  index: number
  active?: boolean
  onPress: (iconName: string, index: number) => void
}

type Props = OwnProps

class SwiperItem extends Component<Props> {
  render() {
    const { active, iconName, title, index, onPress } = this.props

    const _onPress = () => onPress(iconName, index)

    return (
      <TouchableOpacity onPress={_onPress}>
        <View
          style={[
            styles.itemContainer,
            !active ? styles.itemContainerInactive : {}
          ]}
        >
          <View
            style={[
              styles.iconContainer,
              active ? styles.iconContainerActive : {}
            ]}
          >
            <Ionicons
              name={iconName}
              size={20}
              color={active ? 'white' : 'black'}
            />
          </View>
          <Text style={{ fontSize: 10 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SwiperItem
