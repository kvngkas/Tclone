import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'


const TaskDetails = () => {
    const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ backgroundColor: "#1465de" }}>
    <View style={{ padding: 10, }}>
        <Stack.Screen  options={{ title: 'Task Details' }} />
        
      <Text style={{color: 'white', fontSize: 20}}>Id:{id}</Text>
    
    </View>
    </SafeAreaView>
  )
}

export default TaskDetails