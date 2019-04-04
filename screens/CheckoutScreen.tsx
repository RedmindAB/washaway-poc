import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SelectableOptionItem from '../components/SelectableOptionItem'
import CardContainer from '../components/common/CardContainer'
import CheckoutDetails from '../components/CheckoutDetails'
import { SafeAreaView, Alert, View } from 'react-native'
import Button from '../components/common/Button'
import MockTabNavigator from '../components/MockTabNavigator'

type OwnProps = {}

type Props = OwnProps

const MOCK_DATA = [
  {
    title: 'Skjorta',
    price: 25,
    icon: 'ios-shirt',
    count: 1
  },
  {
    title: 'Flugstrykning',
    price: 99,
    icon: 'ios-bowtie',
    count: 4
  },
  {
    title: 'Reperation',
    price: 180,
    icon: 'ios-briefcase',
    count: 1
  }
]

class CheckoutScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'Varukorg'
  }

  onPress = () => null

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MockTabNavigator />
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
          {MOCK_DATA.map((item, index) => (
            <SelectableOptionItem
              key={item.title + index}
              iconName={item.icon}
              price={item.price}
              title={item.title}
              style={{ marginTop: 16 }}
              count={item.count}
            />
          ))}
        </ScrollView>
        <View style={{ marginBottom: 32 }}>
          <CheckoutDetails
            itemPrice={MOCK_DATA.reduce((a, b) => a + b.price, 0)}
          />
          <Button title="Till registrering" onPress={this.onPress} />
        </View>
      </SafeAreaView>
    )
  }
}

export default CheckoutScreen
