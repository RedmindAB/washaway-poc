import { StyleSheet, ViewStyle } from 'react-native'
import colors from '../../util/colors'

interface IStyles {
  container: ViewStyle
  contentContainer: ViewStyle
  itemContainer: ViewStyle
  iconContainerActive: ViewStyle
  itemContainerInactive: ViewStyle
  iconContainer: ViewStyle
}

const ICON_CONTAINER_SIZE = 40

const styles = StyleSheet.create<IStyles>({
  container: {
    height: 80,
    padding: 0,
    borderRadius: 0
  },
  contentContainer: {
    alignItems: 'center'
  },
  itemContainer: {
    width: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainerInactive: {
    opacity: 0.4
  },
  iconContainerActive: {
    backgroundColor: colors.indicatorTransparent
  },
  iconContainer: {
    height: ICON_CONTAINER_SIZE,
    width: ICON_CONTAINER_SIZE,
    backgroundColor: colors.background,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
