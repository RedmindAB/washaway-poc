import { StyleSheet, ViewStyle } from 'react-native'
import colors from '../../../util/colors'

interface IStyles {
  container: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 180,
    width: '100%',
    paddingHorizontal: 16,
    overflow: 'hidden',
    ...colors.shadow
  }
})

export default styles
