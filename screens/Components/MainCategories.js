import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const MainCategories = (props) => {

  const { resturantData, setSelcetedCategory, setResturants, selectedCategory } = props

  function onSelectCategory(item) {
    let resturantList = resturantData.filter(a => a.categories.includes(item.id));
    setResturants(resturantList)
    setSelcetedCategory(item)
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{
        ...styles.categoriesItemContainer,
        backgroundColor: selectedCategory?.id === item.id ? COLORS.primary : COLORS.white
      }}
        onPress={() => onSelectCategory(item)}>
        <View style={styles.categoriesItem}>
          <Image
            source={item.icon}
            style={styles.categoriesItemImage}
          />
        </View>
        <Text style={{ ...styles.categoriesItemText, color: selectedCategory?.id === item.id ? COLORS.white : COLORS.darkGray }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.categoryMainContainer}>
      <Text style={{ ...FONTS.h1 }}>Main</Text>
      <Text style={{ ...FONTS.h1 }}>Categories</Text>

      <FlatList
        data={props.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        extraData={selectedCategory}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryMainContainer: {
    padding: SIZES.padding * 2
  },
  categoriesItemContainer: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.redius,
    marginRight: SIZES.padding,
    alignItems: "center",
    marginRight: SIZES.padding
  },
  categoriesItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  categoriesItemImage: {
    resizeMode: 'contain',
    width: 30,
    height: 30
  },
  categoriesItemText: {
    // color: COLORS.white,
    marginTop: SIZES.padding,
    ...FONTS.body5
  }
})

export default MainCategories
