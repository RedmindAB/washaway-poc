import React, { Component } from 'react'
import { View, Text, ViewStyle, StyleProp, Animated } from 'react-native'
// @ts-ignore
import { Ionicons } from '@expo/vector-icons'

import styles, { COUNT_TRANSLATE } from './styles'
import CardContainer from '../common/CardContainer'
import AmountButton from './components/AmountButton'

type OwnProps = {
  title: string
  price: number
  style?: StyleProp<ViewStyle>
  count?: number
  iconName: string
  removeYoSelf?: boolean
}

type Props = OwnProps

type State = {
  count: number
  removed: boolean
}

const INITAL_COUNT_CONTAINER_TRANSLATE = -110
const INITIAL_COUNT_TEXT_OPACITY = 0
const ANIMATION_DURATION = 250
const INITIAL_COUNT_SCALE = 1
const SCALE_ANIMATION_DURATION = 150

class SelectableOptionItem extends Component<Props, State> {
  state = {
    count: this.props.count || 0,
    countContainerTranslateX: new Animated.Value(
      this.props.count ? COUNT_TRANSLATE : INITAL_COUNT_CONTAINER_TRANSLATE
    ),
    countTextOpacity: new Animated.Value(
      this.props.count ? 1 : INITIAL_COUNT_TEXT_OPACITY
    ),
    countScale: new Animated.Value(INITIAL_COUNT_SCALE),
    removed: false
  }

  componentDidMount() {
    if (this.props.count) {
      // this.setState({ countTextOpacity: new Animated.Value(1) })
    }
  }

  animateInCountContainer = () =>
    Animated.timing(this.state.countContainerTranslateX, {
      toValue: COUNT_TRANSLATE,
      duration: ANIMATION_DURATION
    })

  animateOutCountContainer = () =>
    Animated.timing(this.state.countContainerTranslateX, {
      toValue: INITAL_COUNT_CONTAINER_TRANSLATE,
      duration: ANIMATION_DURATION
    })

  animateInCountText = () =>
    Animated.timing(this.state.countTextOpacity, {
      toValue: 1,
      duration: ANIMATION_DURATION / 2,
      delay: ANIMATION_DURATION / 2
    })

  animateOutCountText = () =>
    Animated.timing(this.state.countTextOpacity, {
      toValue: INITIAL_COUNT_TEXT_OPACITY,
      duration: ANIMATION_DURATION / 2
    })

  animateIncrement = () =>
    Animated.sequence([
      Animated.timing(this.state.countScale, {
        toValue: 1.3,
        duration: SCALE_ANIMATION_DURATION / 2
      }),
      Animated.timing(this.state.countScale, {
        toValue: INITIAL_COUNT_SCALE,
        duration: SCALE_ANIMATION_DURATION / 2
      })
    ])

  animateDecrement = () =>
    Animated.sequence([
      Animated.timing(this.state.countScale, {
        toValue: 0.7,
        duration: SCALE_ANIMATION_DURATION / 2
      }),
      Animated.timing(this.state.countScale, {
        toValue: INITIAL_COUNT_SCALE,
        duration: SCALE_ANIMATION_DURATION / 2
      })
    ])

  increment = () => {
    if (this.state.count === 0) {
      Animated.parallel([
        this.animateInCountContainer(),
        this.animateInCountText()
      ]).start()
    } else {
      this.animateIncrement().start()
    }

    this.setState({ count: this.state.count + 1 })
  }
  decrement = () => {
    if (this.state.count - 1 === 0) {
      Animated.parallel([
        this.animateOutCountContainer(),
        this.animateOutCountText()
      ]).start()
    } else {
      this.animateDecrement().start()
    }

    if (this.props.removeYoSelf && this.state.count - 1 === 0) {
      this.setState({ removed: true })
    } else {
      this.setState({ count: Math.max(0, this.state.count - 1) })
    }
  }

  render() {
    const {
      count,
      countContainerTranslateX,
      countTextOpacity,
      countScale,
      removed
    } = this.state
    const { title, iconName, price, style = {} } = this.props

    const transform = [
      { translateX: countContainerTranslateX },
      { translateY: countContainerTranslateX },
      { rotate: '45deg' }
    ]

    const translateX = countTextOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [-40, 0]
    })

    const opacity = countTextOpacity

    if (removed) return null

    return (
      <CardContainer style={[style, { height: 140 }]}>
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Animated.View style={[styles.countBackground, { transform }]} />
            <Animated.Text
              style={[
                styles.count,
                { opacity, transform: [{ translateX }, { scale: countScale }] }
              ]}
            >
              <Text style={styles.countAmount}>{count.toString()}</Text> st
            </Animated.Text>
          </View>
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
            <AmountButton
              onPress={this.decrement}
              iconName="md-remove"
              disabled={count === 0}
            />
          </View>
        </View>
      </CardContainer>
    )
  }
}

export default SelectableOptionItem
