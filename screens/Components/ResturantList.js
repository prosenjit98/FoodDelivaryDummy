import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants';


const ResturantList = (props) => {
  const { resturnats, categories, currentLocation } = props;
  const getCategoyNameById = (catId) => {
    let category = categories.filter(a => a.id === catId)
    if (category.length > 0)
      return category[0].name
    return ""
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resturnatsItem}
      onPress={() => props.navigation.navigate("Resturant", { item, currentLocation })}
    >
      <View style={{ marginBottom: SIZES.padding }}>
        <Image source={item.photo} style={styles.resturnatImage} />
        <View style={styles.duration}>
          <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
        </View>
      </View>
      <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
      <View style={styles.resturantRatings}>
        <Image
          source={icons.star}
          style={styles.resturnatsItemRetingsIcon}
        />
        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
        <View style={styles.restCategory}>
          {item.categories.map(cat_id => {
            return <View
              key={cat_id}
              style={{ flexDirection: 'row' }}
            >
              <Text style={{ ...FONTS.body3 }}>{getCategoyNameById(cat_id)}</Text>
              <Text style={{ ...FONTS.h3, color: COLORS.darkGray }}>.</Text>
            </View>
          })}
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={resturnats}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30
      }}
    />
  )
}

const styles = StyleSheet.create({
  resturnatsItem: {
    marginBottom: SIZES.padding * 2
  },
  resturnatImage: {
    resizeMode: 'cover',
    width: "100%",
    height: 200,
    borderRadius: SIZES.redius
  },
  duration: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.redius,
    borderBottomLeftRadius: SIZES.redius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resturantRatings: {
    marginTop: SIZES.padding,
    flexDirection: 'row'
  },
  resturnatsItemRetingsIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
    tintColor: COLORS.primary
  },
  restCategory: {
    flexDirection: 'row',
    marginLeft: 10
  }
})

export default ResturantList
