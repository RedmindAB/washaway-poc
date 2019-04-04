import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../util/colors'

interface IStyles {
  container: ViewStyle
  countContainer: ViewStyle
  countBackground: ViewStyle
  count: TextStyle
  countAmount: TextStyle
}

const COUNT_BACKGROUND_SIZE = 110
export const COUNT_TRANSLATE = -COUNT_BACKGROUND_SIZE / 2

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  countContainer: {
    position: 'absolute',
    top: -2,
    left: -16,
    padding: 8
  },
  countBackground: {
    backgroundColor: colors.indicatorTransparent,
    width: COUNT_BACKGROUND_SIZE,
    height: COUNT_BACKGROUND_SIZE,
    position: 'absolute',
    top: -2,
    left: -16
  },
  countAmount: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  count: {
    color: 'white',
    fontSize: 8
  }
})

export default styles
