import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

type OwnProps = {}

type Props = OwnProps

class HomeHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://washaway.se/wp-content/uploads/2019/03/washawaylogo-2.png'
          }}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>Hur kan vi hjälpa dig idag?</Text>
      </View>
    )
  }
}

export default HomeHeader
