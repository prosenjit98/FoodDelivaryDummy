import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons, COLORS, SIZES, FONTS, images } from '../constants'
import MainCategories from './Components/MainCategories'
import ResturantList from './Components/ResturantList'
import { categoryData, initialCurrentLocation, resturantData } from './DummyData'

const Home = ({ navigation }) => {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelcetedCategory] = React.useState(categoryData[0]);
  const [resturants, setResturants] = React.useState(resturantData);
  const [currentLocaition, setCurrentLocation] = React.useState(initialCurrentLocation);

  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerImageContainer}>
          <Image
            source={icons.nearly}
            style={{
              resizeMode: "contain",
              width: 50,
              height: 50,
              tintColor: "red"
            }}
          />
        </TouchableOpacity>
        <View style={styles.headerContaint}>
          <View style={styles.hearderText}>
            <Text style={{ ...FONTS.h3, lineHeight: 28 }}>{currentLocaition.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.busketContainer}>
          <Image
            source={icons.basket}
            style={styles.busketImage}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.contaier}>
      {renderHeader()}
      <MainCategories
        categories={categories}
        setSelcetedCategory={setSelcetedCategory}
        resturantData={resturantData}
        setResturants={setResturants}
        selectedCategory={selectedCategory}
      />
      <ResturantList
        resturnats={resturants}
        categories={categories}
        navigation={navigation}
        currentLocation={currentLocaition} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: COLORS.lightGrey4,
    paddingTop: 5
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50
  },
  headerImageContainer: {
    width: 50,
    paddingLeft: SIZES.padding,
    justifyContent: 'center'
  },
  headerContaint: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hearderText: {
    width: '75%',
    height: '100%',
    backgroundColor: COLORS.lightGrey3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.redius
  },
  busketContainer: {
    width: 50,
    justifyContent: 'center'
  },
  busketImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40
  }
})

export default Home
