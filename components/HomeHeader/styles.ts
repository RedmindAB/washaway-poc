import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  Dimensions,
  TextStyle
} from 'react-native'
import colors from '../../util/colors'

interface IStyles {
  container: ViewStyle
  logo: ImageStyle
  subtitle: TextStyle
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 16
  },
  logo: {
    height: 40,
    width: width * 0.6
  },
  subtitle: {
    color: 'white'
  }
})

export default styles
