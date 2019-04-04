import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native'

interface IStyles {
  container: ViewStyle
  title: TextStyle
  subtitle: TextStyle
  icon: ViewStyle
}

const { width } = Dimensions.get('screen')

export const ITEM_MARGIN = 16

const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5 - ITEM_MARGIN * 1.5,
    marginBottom: ITEM_MARGIN,
    marginRight: ITEM_MARGIN
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  subtitle: {
    fontSize: 10
  },
  icon: {
    marginBottom: 4
  }
})

export default styles
