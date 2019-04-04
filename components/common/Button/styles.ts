import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native'
import colors from '../../../util/colors'

interface IStyles {
  container: ViewStyle
  text: TextStyle
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create<IStyles>({
  container: {
    width: width * 0.7,
    paddingVertical: 16,
    borderRadius: 32,
    backgroundColor: colors.indicator,
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white'
  }
})

export default styles
