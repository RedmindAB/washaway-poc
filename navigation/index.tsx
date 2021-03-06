import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import RegularCleaningScreen from '../screens/RegularCleaningScreen'
import colors from '../util/colors'
import DryCleaningScreen from '../screens/DryCleaningScreen'
import CheckoutScreen from '../screens/CheckoutScreen'
// @ts-ignore
import { fromRight } from 'react-navigation-transitions'

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    RegularCleaning: RegularCleaningScreen,
    DryCleaning: DryCleaningScreen,
    Checkout: CheckoutScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary
      }
    },
    cardStyle: {
      backgroundColor: colors.background
    },
    transitionConfig: () => fromRight()
  }
)

export default createAppContainer(MainStack)
