import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskList from './TaskList'
import { LinearGradient } from 'expo-linear-gradient'

export default function TaskBoard() {
  return (
    <View style={{ padding: 10, flex: 1 }}>
         <LinearGradient
          // Background Linear Gradient
          colors={['#8711c1', '#2472fc']}
          style={StyleSheet.absoluteFill}
        />
        <SafeAreaView>
        <TaskList/>
        </SafeAreaView>
    </View>
  )
}

