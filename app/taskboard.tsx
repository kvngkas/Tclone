import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskList from '@/components/TaskList'

const taskboard = () => {
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.text}>Hello</Text>
        <TaskList />
      </SafeAreaView>
    </View>
  )
}

export default taskboard

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})