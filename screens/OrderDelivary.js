import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions"
import { COLORS, icons, GOOGLE_API_KEY } from '../constants';

const OrderDelivary = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  React.useEffect(() => {
    let { resturant, currentLocation } = route.params;
    let fromLoc = currentLocation.gps;
    let toLoc = resturant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    }

    setRestaurant(resturant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, [])
  const renderMap = () => {
    const carIcon = () => {
      return <Marker
        coordinate={fromLocation}
        anchor={{ x: 0.5, y: 0.5 }}
        flat={true}
      >
        <Image source={icons.car} style={{ width: 40, height: 40 }} />
      </Marker>
    }
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={region}
        >
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
          />
          <Marker coordinate={toLocation}>
            <View style={styles.markerContainer}>
              <View style={styles.markerInner}>
                <Image source={icons.pin} style={styles.markerIcon} />
              </View>
            </View>
          </Marker>
          {carIcon()}
        </MapView>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {renderMap()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  markerInner: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  },
  markerIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.white
  }
});

export default OrderDelivary