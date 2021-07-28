import React from 'react'
import { View, Animated, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native'

import { COLORS, FONTS, icons, SIZES } from '../../constants';

const renderDots = (props) => {

  const { resturants, scrollX } = props

  const dotPossion = Animated.divide(scrollX, SIZES.width)
  return (
    <View style={{ height: 30 }}>
      <View style={styles.dotContainer}>
        {resturants?.menu.map((item, index) => {
          const opacity = dotPossion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          })

          const dotSize = dotPossion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10 * 0.8, 10, 10 * 0.8],
            extrapolate: "clamp"
          })

          const dotColor = dotPossion.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.darkGray, COLORS.primary, COLORS.darkGray],
            extrapolate: "clamp"
          })
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: SIZES.redius,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor
              }}
            />
          )
        })}
      </View>
    </View>)
}

const ResturantOrder = (props) => {

  const { orderItems, resturants, currentLocation, navigation } = props

  const getBastketItemCount = () => {
    let itemCount = orderItems.reduce((a, b) => {
      return a + (b.qty || 0)
    }, 0)
    return itemCount
  }

  const getTotalCost = () => {
    let cost = orderItems.reduce((a, b) => {
      return a + (b.total || 0)
    }, 0)
    return cost
  }
  return (
    <View >
      {renderDots({ ...props })}
      <View style={styles.RorderDtailsContainer}>
        <View style={styles.RorderDtailsMain}>
          <Text style={{ ...FONTS.h4 }}>{getBastketItemCount()} items in Cart</Text>
          <Text style={{ ...FONTS.h4 }}>${getTotalCost()}</Text>
        </View>
        <View style={styles.cardRInfo}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={icons.pin} style={{ width: 20, height: 20, tintColor: COLORS.darkGray, resizeMode: "contain" }} />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={icons.master_card} style={{ width: 20, height: 20, tintColor: COLORS.darkGray, resizeMode: "contain" }} />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>*******</Text>
          </View>
        </View>

        <View style={styles.orderRButton}>
          <TouchableOpacity style={styles.orderRButtonCon} onPress={() => navigation.navigate('OrderDelivary', {
            resturant: resturants,
            currentLocation: currentLocation
          })}>
            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding
  },
  RorderDtailsContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  RorderDtailsMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1
  },
  cardRInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3
  },
  orderRButton: {
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderRButtonCon: {
    padding: SIZES.padding * 2,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    alignItems: 'center',
    borderRadius: SIZES.redius
  }

})

export default ResturantOrder
