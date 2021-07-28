import React, { useState } from 'react'
import { Animated, StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const FoodInfo = (props) => {
  const { resturants, scrollX, orderItems, setOrderItems } = props

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId === menuId)
    if (action === "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1
        item[0].qty = newQty
        item[0].total = item[0].qty * price
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price
        }
        orderList.push(newItem)
      }
      setOrderItems(orderList)
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1
          item[0].qty = newQty
          item[0].total = item[0].qty * price
        }
      }
      setOrderItems(orderList)
    }
  }

  const getOrderQty = (id) => {
    let orderItem = orderItems.filter(a => a.menuId === id)
    if (orderItem.length > 0) {
      return orderItem[0].qty
    }
    return 0
  }

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: scrollX } } }
      ], { useNativeDriver: false })}
    >
      {resturants?.menu.map((item, index) => (
        <View
          key={`menu-${index}`}
          style={{ alignItems: 'center' }}
        >
          <View style={{ height: SIZES.height * 0.35 }}>
            <Image
              source={item.photo}
              style={styles.MainImage}
            />
            <View style={styles.quantity}>
              <TouchableOpacity style={styles.minusButton}>
                <Text style={{ ...FONTS.body1 }} onPress={() => editOrder("-", item.menuId, item.price)}>-</Text>
              </TouchableOpacity>

              <View style={styles.centerButton}>
                <Text style={{ ...FONTS.body2 }}>{getOrderQty(item.menuId)}</Text>
              </View>

              <TouchableOpacity style={styles.plusButton} onPress={() => editOrder("+", item.menuId, item.price)}>
                <Text style={{ ...FONTS.body2 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.detailsTitle}>{item.name} - {item.price.toFixed(2)}</Text>
            <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
            <Image source={icons.fire} style={{ width: 20, height: 20, marginRight: 10 }} />
            <Text style={{ ...FONTS.body3 }}>{item.calories.toFixed(2)} cal</Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  MainImage: {
    resizeMode: 'cover',
    width: SIZES.width,
    height: '100%'
  },
  quantity: {
    position: 'absolute',
    bottom: - 20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  minusButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    minHeight: 50
  },
  centerButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
  },
  plusButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    minHeight: 50
  },
  descriptionContainer: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: SIZES.padding
  },
  detailsTitle: {
    marginVertical: 10,
    textAlign: 'center',
    ...FONTS.h2
  }
})

export default FoodInfo
