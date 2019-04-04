import React, { Component } from 'react'
import { View, Text, ViewStyle, StyleProp } from 'react-native'
// @ts-ignore
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
import CardContainer from '../common/CardContainer'
import AmountButton from './components/AmountButton'

type OwnProps = {
  title: string
  price: number
  style?: StyleProp<ViewStyle>
  count?: number
  iconName: string
}

type Props = OwnProps

type State = {
  count: number
}

class SelectableOptionItem extends Component<Props, State> {
  state = {
    count: this.props.count || 0
  }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: Math.max(0, this.state.count - 1) })

  render() {
    const { count } = this.state
    const { title, iconName, price, style = {} } = this.props

    return (
      <CardContainer style={[style, { height: 140 }]}>
        <View style={styles.container}>
          {count > 0 && (
            <View style={styles.countContainer}>
              <View style={styles.countBackground} />
              <Text style={styles.count}>
                <Text style={styles.countAmount}>{count.toString()}</Text> st
              </Text>
            </View>
          )}
          <Ionicons
            name={iconName}
            size={40}
            style={{ marginHorizontal: 16 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ opacity: 0.5 }}>{`${price} kr`}</Text>
          </View>
          <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <AmountButton onPress={this.increment} iconName="md-add" />
            <AmountButton onPress={this.decrement} iconName="md-remove" />
          </View>
        </View>
      </CardContainer>
    )
  }
}

export default SelectableOptionItem
