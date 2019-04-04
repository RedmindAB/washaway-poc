import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../util/colors'

interface IStyles {
  container: ViewStyle
  row: ViewStyle
  toPay: TextStyle
  total: TextStyle
  price: TextStyle
  code: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  toPay: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  total: {
    marginTop: 16,
    fontWeight: 'bold'
  },
  price: {
    opacity: 0.5
  },
  code: {
    color: colors.indicator
  }
})

export default styles
