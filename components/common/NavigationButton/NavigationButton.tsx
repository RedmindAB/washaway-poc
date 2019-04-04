import React, { Component } from 'react'
import {
  Text,
  ViewStyle,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity
} from 'react-native'
// @ts-ignore
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
import CardContainer from '../CardContainer'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

type OwnProps = {
  title: string
  subtitle: string
  style?: ViewStyle
  route: string
  disabled?: boolean
  iconName: string
}

type Props = OwnProps & NavigationScreenProps

class NavigationButton extends Component<Props> {
  navigation = this.props.navigation

  onPress = () => this.navigation.navigate(this.props.route)

  render() {
    const { title, iconName, subtitle, disabled, style = {} } = this.props

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.onPress}>
        <CardContainer
          style={[
            styles.container,
            style,
            disabled ? { opacity: 0.5, elevation: 0 } : {}
          ]}
        >
          <Ionicons name={iconName} size={40} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </CardContainer>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(NavigationButton)
