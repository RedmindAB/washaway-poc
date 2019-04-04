import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../util/colors'

interface IStyles {
  container: ViewStyle
  item: ViewStyle
  itemActive: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  item: {
    paddingVertical: 8,
    width: '33%',
    opacity: 0.5,
    borderTopWidth: 4,
    borderTopColor: 'transparent'
  },
  itemActive: {
    opacity: 1,
    borderTopWidth: 4,
    borderTopColor: colors.indicatorTransparent
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default styles
