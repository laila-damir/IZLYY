import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={{ position: 'absolute', top: 20, left: 20 }}>
      <Image
        style={styles.image}
        source={require('../assets/back.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
})