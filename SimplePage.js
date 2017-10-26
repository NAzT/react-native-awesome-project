/* @flow */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

export default function CurrentStateIndicator ({state, style}: *) {
  return (
    <View style={[styles.page, style]}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Current route is: {state.routes[state.index].title || state.index}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 3
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16
  }
})

const stylesMapView = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
