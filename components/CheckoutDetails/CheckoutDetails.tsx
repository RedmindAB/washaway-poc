import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import CardContainer from '../common/CardContainer'

type OwnProps = {
  itemPrice: number
}

type Props = OwnProps

const DELIVERY_FEE = 39

class CheckoutDetails extends Component<Props> {
  render() {
    const { itemPrice } = this.props

    return (
      <CardContainer
        style={{
          width: '80%',
          alignSelf: 'center',
          marginVertical: 32,
          height: 'auto',
          padding: 16
        }}
      >
        <Text style={styles.toPay}>Att betala</Text>
        <View style={styles.row}>
          <Text style={styles.price}>Kostnad varor:</Text>
          <Text style={styles.price}>{itemPrice} kr</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>Leveransavgift:</Text>
          <Text style={styles.price}>{DELIVERY_FEE} kr</Text>
        </View>
        <Text style={styles.code}>Har du en inbjudningskod?</Text>
        <View style={styles.row}>
          <Text style={styles.total}>Totalt:</Text>
          <Text style={styles.total}>{itemPrice + DELIVERY_FEE} kr</Text>
        </View>
      </CardContainer>
    )
  }
}

export default CheckoutDetails
