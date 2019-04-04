import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import styles from './styles'
import CardContainer from '../common/CardContainer'
import SwiperItem from './components/SwiperItem'

type OwnProps = {
  categories: any[]
  onSelectCategory: (iconName: string) => void
}

type Props = OwnProps

class CategorySwiper extends Component<Props> {
  state = {
    activeIndex: 0
  }

  onPress = (iconName: string, index: number) => {
    const { onSelectCategory } = this.props

    this.setState({ activeIndex: index })
    onSelectCategory(iconName)
  }

  render() {
    const { activeIndex } = this.state
    const { categories } = this.props

    return (
      <CardContainer style={styles.container}>
        <ScrollView
          horizontal
          style={{ flex: 1 }}
          contentContainerStyle={styles.contentContainer}
        >
          {categories.map((category, index) => (
            <SwiperItem
              title={category.title}
              iconName={category.iconName}
              index={index}
              active={index === activeIndex}
              key={category.title + index}
              onPress={this.onPress}
            />
          ))}
        </ScrollView>
      </CardContainer>
    )
  }
}

export default CategorySwiper
