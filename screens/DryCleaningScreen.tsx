import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../util/colors'
import { SafeAreaView, View } from 'react-native'
import Button from '../components/common/Button'
import SelectableOptionItem from '../components/SelectableOptionItem'
import CategorySwiper from '../components/CategorySwiper'
import { NavigationScreenProps } from 'react-navigation'

type OwnProps = {}

type Props = OwnProps & NavigationScreenProps

const MOCK_DATA = [
  {
    title: 'Skjorta',
    price: 25
  },
  {
    title: 'Skjorta 5st',
    price: 99
  },
  {
    title: 'Skjorta 10st',
    price: 180
  },
  {
    title: 'Skjorta 20st',
    price: 350
  },
  {
    title: 'Skjorta 100st',
    price: 600
  },
  {
    title: 'Skjorta 1000st',
    price: 1000
  },
  {
    title: 'Skjorta ∞st',
    price: 10000
  }
]

const MOCK_CATEGORIES = [
  {
    title: 'Tröjor',
    iconName: 'ios-shirt'
  },
  {
    title: 'Herr',
    iconName: 'ios-male'
  },
  {
    title: 'Dam',
    iconName: 'ios-female'
  },
  {
    title: 'Fest',
    iconName: 'ios-people'
  },
  {
    title: 'Utomhus',
    iconName: 'ios-american-football'
  },
  {
    title: 'Skädderi',
    iconName: 'ios-briefcase'
  }
]

class DryCleaningScreen extends Component<Props> {
  navigation = this.props.navigation

  state = {
    iconName: MOCK_CATEGORIES[0].iconName
  }

  static navigationOptions = {
    headerTitle: 'Sortiment'
  }

  onSelectCategory = (iconName: string) => {
    this.setState({ iconName })
  }

  navigateToCheckout = () => this.navigation.navigate('Checkout')

  render() {
    const { iconName } = this.state

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CategorySwiper
          categories={MOCK_CATEGORIES}
          onSelectCategory={this.onSelectCategory}
        />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
          {MOCK_DATA.map(({ title, price }) => (
            <SelectableOptionItem
              iconName={iconName}
              style={{ marginBottom: 16 }}
              title={title}
              price={price}
              key={title + price}
            />
          ))}
        </ScrollView>
        <View
          style={{
            paddingVertical: 16,
            backgroundColor: 'white',
            ...colors.shadow
          }}
        >
          <Button title="Till varukorg" onPress={this.navigateToCheckout} />
        </View>
      </SafeAreaView>
    )
  }
}

export default DryCleaningScreen
