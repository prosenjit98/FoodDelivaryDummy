import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Animated } from "react-native"
import { COLORS, icons, SIZES, FONTS } from '../constants';
import FoodInfo from './Components/FoodInfo';
import ResturantOrder from './Components/ResturantOrder';

const Resturant = ({ route, navigation }) => {
  const [resturant, setResturant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([])


  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;
    setCurrentLocation(currentLocation);
    setResturant(item);
  })


  const renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', paddingTop: 5, height: 50 }}>
        <TouchableOpacity style={styles.HearderLeftButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.resturantNameSection}>
          <View style={styles.hearderText}>
            <Text style={{ ...FONTS.h4, lineHeight: 22 }}>{resturant?.name}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.resturantRightIconCont}>
          <Image
            source={icons.list}
            style={styles.resturantRightIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <FoodInfo resturants={resturant} scrollX={scrollX} orderItems={orderItems} setOrderItems={setOrderItems} />
      <ResturantOrder resturants={resturant} scrollX={scrollX} orderItems={orderItems} currentLocation={currentLocation} navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrey2,
    flex: 1
  },
  HearderLeftButton: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center'
  },
  backIcon: {
    resizeMode: 'contain',
    width: 30,
    height: 30
  },
  resturantNameSection: {
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
    borderRadius: SIZES.redius,
    paddingHorizontal: SIZES.padding * 3
  },
  resturantRightIconCont: {
    width: 50,
    paddingRight: SIZES.padding,
    justifyContent: 'center'
  },
  resturantRightIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
})

export default Resturant