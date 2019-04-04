import React, { Component } from 'react'
import { View } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import colors from '../util/colors'
import NavigationButton from '../components/common/NavigationButton'

type OwnProps = {}

type Props = OwnProps

const CONTAINER_PADDING = 16

class HomeScreen extends Component<Props> {
  static navigationOptions = {
    header: <HomeHeader />
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingTop: CONTAINER_PADDING,
          paddingLeft: CONTAINER_PADDING,
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <NavigationButton
          title="Struken tvätt"
          subtitle="Kemtvätt & vattentvätt"
          route="DryCleaning"
          iconName="ios-shirt"
        />
        <NavigationButton
          title="Hushållstvätt"
          subtitle="Torktumlas & viks"
          route=""
          iconName="ios-bowtie"
          disabled
        />
        <NavigationButton
          title="Klädvård"
          subtitle="Kläder & skor"
          route="DryCleaning"
          iconName="ios-construct"
        />
        <NavigationButton
          title="Prenumerera"
          subtitle="Kommer snart"
          iconName="ios-repeat"
          route=""
          disabled
        />
      </View>
    )
  }
}

export default HomeScreen
